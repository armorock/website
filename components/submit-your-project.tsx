"use client";

import { useState, useRef, useContext, ChangeEvent } from "react";
import type { NextPage } from "next";
import { QuoteFormContext } from "../contexts/QuoteFormContext";

export type SubmitYourProjectType = {
  className?: string;
};

const SubmitYourProject: NextPage<SubmitYourProjectType> = ({
  className = "",
}) => {
  const { formState, setFormState } = useContext(QuoteFormContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [fileError, setFileError] = useState<string | null>(null);

  // Handle file upload via input
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  // Handle drag and drop events
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  // Common file handling logic
  const handleFiles = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      // Check file size (limit to 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setFileError("File is too large. Maximum file size is 10MB.");
        return;
      }

      // Check file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/msword'];
      if (!allowedTypes.includes(file.type)) {
        setFileError("Invalid file type. Please upload PDF, JPEG, PNG, or DOC file.");
        return;
      }

      setFileError(null);

      // Read file as data URL
      const reader = new FileReader();
      reader.onload = () => {
        setFormState({
          ...formState,
          fileData: reader.result as string,
          fileName: file.name
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle project details input
  const handleProjectDetailsChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      projectDetails: e.target.value
    });
  };

  // Handle click on the upload area
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  // Handle file removal
  const handleRemoveFile = () => {
    setFormState({
      ...formState,
      fileData: undefined,
      fileName: undefined
    });
  };

  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-16 px-[25px] gap-[21px] text-left text-[65px] text-gray-100 font-oswald mq750:pt-[42px] mq750:pb-[42px] mq750:box-border ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] whitespace-pre-wrap mq450:text-[39px] mq450:leading-[60px] mq1025:text-[52px] mq1025:leading-[80px]">
        {" "}
        submit your project
      </h1>
      <div className="self-stretch text-center text-lg font-open-sans text-firebrick bg-gainsboro-200 p-4 rounded-md mx-auto max-w-4xl">
        <p className="font-semibold">
          <span className="inline-block mr-2">⚠️</span>
          Please upload a plan set, provide project details, or both to proceed with your quote request.
        </p>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-x-[76px] gap-y-0 text-center text-[35px] mq750:gap-[19px] mq1125:gap-[38px]">
        <div className="h-auto w-[272px] flex flex-col items-start justify-start">
          <h1 className="m-0 w-[272px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 mq450:text-[21px] mq450:leading-[60px] mq1025:text-[28px] mq1025:leading-[80px]">
            upload a plan set
          </h1>
          <div 
            className={`flex flex-col items-center justify-center p-4 mt-[-10px] relative w-[200px] h-[120px] bg-gainsboro-200 cursor-pointer border-2 border-dashed ${dragActive ? 'border-firebrick bg-gainsboro-300' : 'border-gray-300'} transition-colors`}
            onClick={handleUploadClick}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={handleFileChange}
            />
            {formState.fileData ? (
              <div className="flex flex-col items-center">
                <span className="text-sm font-open-sans mb-2 text-ellipsis overflow-hidden w-full">{formState.fileName}</span>
                <button 
                  onClick={(e) => { e.stopPropagation(); handleRemoveFile(); }}
                  className="text-sm font-open-sans text-firebrick hover:text-indianred"
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <svg className="w-8 h-8 mb-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span className="text-sm font-open-sans">Click or drag file to upload</span>
              </div>
            )}
          </div>
          {fileError && (
            <div className="text-red-500 text-xs mt-1 w-[200px]">
              {fileError}
            </div>
          )}
        </div>
        <div className="h-[318.1px] w-10 flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border">
          <div className="flex flex-row items-start justify-start pt-0 px-[19px] pb-[13px]">
            <div className="h-[121.7px] w-px relative border-gray-100 border-solid border-r-[1px] box-border shrink-0" />
          </div>
          <h1 className="m-0 w-10 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 mt-[-13px] mq450:text-[21px] mq450:leading-[60px] mq1025:text-[28px] mq1025:leading-[80px]">
            or
          </h1>
          <div className="flex flex-row items-start justify-start py-0 pl-5 pr-[19px] mt-[-13px] relative">
            <div className="h-[121.7px] w-px relative border-gray-100 border-solid border-r-[1px] box-border shrink-0" />
          </div>
        </div>
        <section className="h-auto w-[671px] flex flex-col items-start justify-start text-center text-[35px] text-gray-100 font-oswald">
          <div className="flex flex-row items-start justify-start py-0 px-0.5">
            <h1 className="m-0 w-[334px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block shrink-0 mq450:text-[21px] mq450:leading-[60px] mq1025:text-[28px] mq1025:leading-[80px]">
              share project details
            </h1>
          </div>
          <div className="w-full flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border">
            <textarea
              className="mt-[-13px] h-[290px] w-[671px] p-4 relative bg-gainsboro-200 shrink-0 resize-none text-lg font-open-sans text-gray-900"
              placeholder="Please share details about your project requirements..."
              value={formState.projectDetails || ''}
              onChange={handleProjectDetailsChange}
            />
          </div>
        </section>
      </div>
    </section>
  );
};

export default SubmitYourProject;
