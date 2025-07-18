"use client";

import { useContext } from "react";
import type { NextPage } from "next";
import { QuoteFormContext } from "../contexts/QuoteFormContext";

export type ContactInformationType = {
  className?: string;
};

const ContactInformation: NextPage<ContactInformationType> = ({
  className = "",
}) => {
  const { 
    formState, 
    setFormState, 
    isSubmitting, 
    setIsSubmitting,
    submitStatus,
    setSubmitStatus,
    errorMessage,
    setErrorMessage
  } = useContext(QuoteFormContext);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Basic form validation
    if (!formState.firstName.trim()) {
      setSubmitStatus("error");
      setErrorMessage("First Name is required.");
      setIsSubmitting(false);
      return;
    }

    if (!formState.lastName.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Last Name is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formState.phoneNumber.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Phone Number is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formState.company.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Company is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formState.city.trim()) {
      setSubmitStatus("error");
      setErrorMessage("City is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formState.state.trim()) {
      setSubmitStatus("error");
      setErrorMessage("State is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formState.rolePosition.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Role/Position is required.");
      setIsSubmitting(false);
      return;
    }
    
    // Email validation
    if (!formState.email.includes("@") || !formState.email.includes(".")) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Check acknowledgement
    if (!formState.acknowledgement) {
      setSubmitStatus("error");
      setErrorMessage("You must acknowledge the terms to proceed.");
      setIsSubmitting(false);
      return;
    }
    
    // Check if either file upload or project details are provided
    if (!formState.fileData && (!formState.projectDetails || !formState.projectDetails.trim())) {
      setSubmitStatus("error");
      setErrorMessage("You must either upload a plan set, provide project details, or both.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Use our API endpoint
      const response = await fetch('/api/submit-quote-form', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus("success");
        // Reset form data on successful submission
        setFormState({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          company: "",
          city: "",
          state: "",
          rolePosition: "",
          email: "",
          projectDetails: "",
          acknowledgement: false,
          fileData: undefined,
          fileName: undefined,
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.error || "Failed to submit the form. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center justify-start py-16 px-[118px] gap-5 text-center text-6xl text-gray-100 font-oswald mq450:pl-5 mq450:pr-5 mq450:box-border mq750:py-[42px] mq750:px-[59px] mq750:box-border ${className}`}
    >
      <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq1025:text-5xl mq1025:leading-[80px]">
        contact information
      </h1>
      <section className="self-stretch flex flex-row items-start justify-center flex-wrap content-start gap-x-[30px] gap-y-[21px] text-left text-xl text-gray-100 font-open-sans">
        <div className="h-[111.3px] w-[216px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37.3px] left-[0px] w-[216px] h-[74px] px-3"
            type="text"
            name="firstName"
            value={formState.firstName}
            onChange={handleInputChange}
            required
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[117.1px] mq450:text-base mq450:leading-6">
            First Name
          </label>
        </div>
        <div className="h-[111.3px] w-[216px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37.3px] left-[0px] w-[216px] h-[74px] px-3"
            type="text"
            name="lastName"
            value={formState.lastName}
            onChange={handleInputChange}
            required
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[117.1px] mq450:text-base mq450:leading-6">
            Last Name
          </label>
        </div>
        <div className="h-[111px] w-[280px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37px] left-[0px] w-[280px] h-[74px] px-3"
            type="text"
            name="phoneNumber"
            value={formState.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] mq450:text-base mq450:leading-6">
            Phone Number
          </label>
        </div>
        <div className="h-[111px] w-[394px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37px] left-[0px] w-[394px] h-[74px] px-3"
            type="text"
            name="company"
            value={formState.company}
            onChange={handleInputChange}
            required
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] mq450:text-base mq450:leading-6">
            Company
          </label>
        </div>
        <div className="h-[110.7px] w-60 relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[36.7px] left-[0px] w-[240.5px] h-[74px] px-3"
            type="text"
            name="city"
            value={formState.city}
            onChange={handleInputChange}
            required
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[74.6px] mq450:text-base mq450:leading-6">
            City
          </label>
        </div>
        <div className="h-[111px] w-[177px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[37px] left-[0.4px] w-[176.8px] h-[74px] px-3"
            type="text"
            name="state"
            value={formState.state}
            onChange={handleInputChange}
            required
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-14 mq450:text-base mq450:leading-6">
            State
          </label>
        </div>
        <div className="h-[110px] w-[345px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[36px] left-[0px] w-[345px] h-[74px] px-3"
            type="text"
            name="rolePosition"
            value={formState.rolePosition}
            onChange={handleInputChange}
            required
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[129.8px] mq450:text-base mq450:leading-6">
            Role/Position
          </label>
        </div>
        <div className="h-[110px] w-[345px] relative">
          <input
            className="[border:none] [outline:none] bg-gainsboro-200 absolute top-[36px] left-[0px] w-[345px] h-[74px] px-3"
            type="text"
            name="email"
            value={formState.email}
            onChange={handleInputChange}
            required
          />
          <label className="cursor-pointer absolute top-[0px] left-[0px] leading-[30px] flex items-center w-[129.8px] mq450:text-base mq450:leading-6">
            Email
          </label>
        </div>
      </section>
      <section className="self-stretch overflow-hidden flex flex-col items-center justify-end py-[19px] px-0 text-left text-[22px] text-gray-100 font-open-sans mq750:gap-[17px]">
        <div className="self-stretch flex flex-col items-end justify-start gap-[34px] mq750:gap-[17px]">
          <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-[18px]">
            <input 
              className="m-0 h-[25px] w-[25px] relative" 
              type="checkbox" 
              name="acknowledgement"
              checked={formState.acknowledgement}
              onChange={handleInputChange}
            />
            <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block min-w-[464px] mq450:text-lg mq450:leading-6 mq750:min-w-full">
              I acknowledge that I am sharing my information with Armorock
              Polymer Concrete, and my information will be used to provide an
              estimate for my project. Armorock may use my information to
              contact me regarding my project details.
            </h3>
          </div>
          <div className="flex flex-col items-end">
            <button 
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="cursor-pointer border-gray-100 border-solid border-[3px] py-[5px] pl-[42px] pr-[38px] bg-gray-100 w-[147.3px] box-border flex flex-row items-end justify-start hover:bg-dimgray hover:border-dimgray hover:border-solid hover:hover:border-[3px] hover:box-border disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <div className="relative text-xl leading-6 font-medium font-oswald text-white text-center mq450:text-base mq450:leading-[19px]">
                {isSubmitting ? "SENDING..." : "SUBMIT"}
              </div>
            </button>
            {submitStatus === "success" && (
              <div className="mt-4 text-green-500 font-semibold">
                Thank you for your submission! We'll be in touch soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 text-red-500 font-semibold">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ContactInformation;
