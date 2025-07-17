"use client";

import React, { createContext, useState, ReactNode } from 'react';

// Define the form state interface
export interface QuoteFormState {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  company: string;
  city: string;
  state: string;
  rolePosition: string;
  email: string;
  projectDetails?: string;
  acknowledgement: boolean;
  fileData?: string;
  fileName?: string;
}

// Define the context interface
interface QuoteFormContextType {
  formState: QuoteFormState;
  setFormState: React.Dispatch<React.SetStateAction<QuoteFormState>>;
  isSubmitting: boolean;
  setIsSubmitting: React.Dispatch<React.SetStateAction<boolean>>;
  submitStatus: null | 'success' | 'error';
  setSubmitStatus: React.Dispatch<React.SetStateAction<null | 'success' | 'error'>>;
  errorMessage: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context
export const QuoteFormContext = createContext<QuoteFormContextType>({
  formState: {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    company: '',
    city: '',
    state: '',
    rolePosition: '',
    email: '',
    projectDetails: '',
    acknowledgement: false,
  },
  setFormState: () => {},
  isSubmitting: false,
  setIsSubmitting: () => {},
  submitStatus: null,
  setSubmitStatus: () => {},
  errorMessage: '',
  setErrorMessage: () => {},
});

// Create the provider component
export const QuoteFormProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [formState, setFormState] = useState<QuoteFormState>({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    company: '',
    city: '',
    state: '',
    rolePosition: '',
    email: '',
    projectDetails: '',
    acknowledgement: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  return (
    <QuoteFormContext.Provider
      value={{
        formState,
        setFormState,
        isSubmitting,
        setIsSubmitting,
        submitStatus,
        setSubmitStatus,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </QuoteFormContext.Provider>
  );
};
