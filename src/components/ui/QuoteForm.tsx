'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

const quoteSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, { message: 'Please select a project type' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters' }),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const projectTypes = [
  { value: 'manholes', label: 'Manholes' },
  { value: 'pipelines', label: 'Pipelines' },
  { value: 'custom-structures', label: 'Custom Structures' },
  { value: 'other', label: 'Other' },
];

const QuoteForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      projectType: '',
    },
  });

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit quote request');
      }
      
      setIsSuccess(true);
      reset();
      
      // Reset success message after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting quote request:', err);
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold mb-6">Request a Quote</h3>
      
      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded mb-6"
        >
          Thank you! Your quote request has been received. Our team will get back to you shortly.
        </motion.div>
      )}
      
      {error && (
        <div className="bg-red-100 border border-red-200 text-red-800 px-4 py-3 rounded mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:outline-none ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:outline-none ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="john@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              {...register('phone')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
              Company Name
            </label>
            <input
              type="text"
              id="company"
              {...register('company')}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:outline-none"
              placeholder="Acme Inc."
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
              Project Type *
            </label>
            <select
              id="projectType"
              {...register('projectType')}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:outline-none ${
                errors.projectType ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select a project type</option>
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
            )}
          </div>

          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Project Details *
            </label>
            <textarea
              id="message"
              {...register('message')}
              rows={5}
              className={`w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[var(--primary)] focus:outline-none ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Please provide details about your project..."
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
            )}
          </div>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`btn btn-primary w-full md:w-auto ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Request Quote'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
