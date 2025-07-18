"use client";

import { useState } from "react";
import type { NextPage } from "next";

// US States array for dropdown
const US_STATES = [
  'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
  'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
  'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
  'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
  'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
];

// Types for form data
export type ConnectWithUsSectionType = {
  className?: string;
};

const ConnectWithUsSection: NextPage<ConnectWithUsSectionType> = ({
  className = "",
}) => {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    company: "",
    city: "",
    state: "",
    rolePosition: "",
    email: "",
    lunchAndLearns: false,
    plantTours: false,
    virtualMeetings: false,
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (name === 'phoneNumber' && type === 'text') {
      // Only allow numbers for phone field
      const numbersOnly = value.replace(/[^0-9]/g, '');
      setFormData({
        ...formData,
        [name]: numbersOnly
      });
    } else if ((e.target as HTMLInputElement).type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: (e.target as HTMLInputElement).checked
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Basic form validation
    if (!formData.firstName.trim()) {
      setSubmitStatus("error");
      setErrorMessage("First Name is required.");
      setIsSubmitting(false);
      return;
    }

    if (!formData.lastName.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Last Name is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.phoneNumber.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Phone Number is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.company.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Company is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.city.trim()) {
      setSubmitStatus("error");
      setErrorMessage("City is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.state.trim()) {
      setSubmitStatus("error");
      setErrorMessage("State is required.");
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.rolePosition.trim()) {
      setSubmitStatus("error");
      setErrorMessage("Role/Position is required.");
      setIsSubmitting(false);
      return;
    }
    
    // Email validation
    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setSubmitStatus("error");
      setErrorMessage("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Use our API endpoint
      const response = await fetch('/api/submit-form', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setSubmitStatus("success");
        // Reset form data on successful submission
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          company: "",
          city: "",
          state: "",
          rolePosition: "",
          email: "",
          lunchAndLearns: false,
          plantTours: false,
          virtualMeetings: false,
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
    <main
      className={`self-stretch bg-gray-100 overflow-hidden flex flex-col items-center justify-center py-[50px] pl-[53px] pr-[0px] gap-[39px] text-left text-6xl text-white font-oswald mq450:pt-[21px] mq450:pb-[21px] mq450:box-border mq675:gap-[19px] mq675:pl-[26px] mq675:pr-[26px] mq675:box-border mq825:pt-8 mq825:pb-8 mq825:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start">
        <h2 className="m-0 relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] mq450:text-4xl mq450:leading-[60px] mq825:text-5xl mq825:leading-[80px]">
          connect with us
        </h2>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center flex-wrap content-center gap-[59px] text-center text-[35px] mq675:gap-[29px]">
        <div className="w-[324px] flex flex-col items-center justify-start gap-[105px] mq450:gap-[52px]">
          <div className="relative leading-[5px] uppercase font-medium mq450:text-[21px] mq450:leading-[3px] mq825:text-[28px] mq825:leading-[4px]">
            <p className="[margin-block-start:0] [margin-block-end:50px]">{`phone: `}</p>
            <p className="m-0">(702) 824-9702</p>
          </div>
          <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[5px] uppercase font-medium font-[inherit] mq450:text-[21px] mq450:leading-[3px] mq825:text-[28px] mq825:leading-[4px]">
            <p className="[margin-block-start:0] [margin-block-end:50px]">{`email: `}</p>
            <p className="m-0">info@armorock.com</p>
          </h1>
        </div>
        <div className="h-[489.1px] w-10 flex flex-col items-start justify-start gap-[1.4px]">
          <div className="flex flex-row items-start justify-start py-0 px-[19px]">
            <div className="h-[186.6px] w-px relative bg-white border-white border-solid border-r-[1px] box-border" />
          </div>
          <div className="flex flex-col items-start justify-start gap-[16.5px]">
            <h1 className="m-0 w-10 h-[100px] relative text-[length:inherit] leading-[100px] uppercase font-medium font-[inherit] inline-block [text-shadow:1px_0_0_#fff,_0_1px_0_#fff,_-1px_0_0_#fff,_0_-1px_0_#fff] shrink-0 mq450:text-[21px] mq450:leading-[60px] mq825:text-[28px] mq825:leading-[80px]">
              or
            </h1>
            <div className="flex flex-row items-start justify-start py-0 pl-5 pr-[19px]">
              <div className="h-[186.6px] w-px relative bg-white border-white border-solid border-r-[1px] box-border shrink-0" />
            </div>
          </div>
        </div>
        <section className="flex-1 flex flex-col items-start justify-start gap-[39px] min-w-[341px] text-left text-xl text-white font-open-sans mq450:gap-[19px]">
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-x-[30px] gap-y-[17px]">
            <div className="h-[111.3px] w-[216px] flex flex-col items-start justify-start gap-[7.3px]">
              <h3 className="m-0 w-[117.1px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
                First Name
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[216px] h-[74px] relative px-3 text-black"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="h-[111.3px] w-[216px] flex flex-col items-start justify-start gap-[7.3px]">
              <h3 className="m-0 w-[117.1px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
                Last Name
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[216px] h-[74px] relative px-3 text-black"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="h-[111px] w-[280px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[143px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block mq450:text-base mq450:leading-6">
                Phone Number
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[280px] h-[74px] relative px-3 text-black"
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                pattern="[0-9]*"
                inputMode="numeric"
                placeholder="Numbers only"
                required
              />
            </div>
            <div className="h-[111px] w-[345px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[96.9px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
                Company
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[345px] h-[74px] relative px-3 text-black"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="h-[111px] w-[212px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[59.6px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
                City
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[212px] h-[74px] relative px-3 text-black"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="h-[111px] w-[155px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[55px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
                State
              </h3>
              <select
                className="bg-gainsboro-200 w-[155px] h-[74px] relative px-3 text-black"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              >
                <option value="">Select State</option>
                {US_STATES.map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="h-[110px] w-[345px] flex flex-col items-start justify-start gap-1.5">
              <h3 className="m-0 w-[141px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center mq450:text-base mq450:leading-6">
                Role/Position
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[345px] h-[74px] relative px-3 text-black"
                type="text"
                name="rolePosition"
                value={formData.rolePosition}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="h-[111px] w-[394px] flex flex-col items-start justify-start gap-[7px]">
              <h3 className="m-0 w-[51px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block mq450:text-base mq450:leading-6">
                Email
              </h3>
              <input
                className="[border:none] [outline:none] bg-gainsboro-200 w-[394px] h-[74px] relative px-3 text-black"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <h2 className="m-0 relative text-[35px] leading-[25px] uppercase font-medium font-oswald text-center mq450:text-[21px] mq450:leading-[15px] mq825:text-[28px] mq825:leading-5">
            i want more information about:
          </h2>
          <div className="self-stretch flex flex-row items-end justify-start flex-wrap content-end mq450:gap-[21px]">
            <div className="flex-1 flex flex-row items-end justify-start flex-wrap content-end gap-[42px] mq675:gap-[21px]">
              <div className="h-[30px] w-[216px] flex flex-row items-end justify-start gap-2.5">
                <input 
                  className="m-0 h-[27px] w-[25px]" 
                  type="checkbox" 
                  name="lunchAndLearns"
                  checked={formData.lunchAndLearns}
                  onChange={handleInputChange}
                />
                <h3 className="m-0 w-[181px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-base mq450:leading-6">
                  Lunch and Learns
                </h3>
              </div>
              <div className="h-[30px] w-[141px] flex flex-row items-end justify-start gap-2.5">
                <input 
                  className="m-0 h-[27px] w-[25px]" 
                  type="checkbox" 
                  name="plantTours"
                  checked={formData.plantTours}
                  onChange={handleInputChange}
                />
                <h3 className="m-0 w-[106px] relative text-[length:inherit] leading-[30px] font-normal font-[inherit] inline-block mq450:text-base mq450:leading-6">
                  Plant Tours
                </h3>
              </div>
              <div className="h-[30px] w-[292px] flex flex-row items-start justify-start gap-[11px]">
                <input 
                  className="m-0 h-[26px] w-[25px]" 
                  type="checkbox" 
                  name="virtualMeetings"
                  checked={formData.virtualMeetings}
                  onChange={handleInputChange}
                />
                <h3 className="m-0 w-64 relative text-[length:inherit] leading-[30px] font-normal font-[inherit] flex items-center shrink-0 mq450:text-base mq450:leading-6">
                  Virtual Meetings/Webinars
                </h3>
              </div>
            </div>
          </div>
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="cursor-pointer border-firebrick border-solid border-[3px] py-[5px] pl-[38px] pr-[42px] bg-firebrick w-[147.3px] box-border flex flex-row items-end justify-end hover:bg-indianred hover:border-indianred hover:border-solid hover:hover:border-[3px] hover:box-border disabled:opacity-50 disabled:cursor-not-allowed"
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
        </section>
      </div>
    </main>
  );
};

export default ConnectWithUsSection;
