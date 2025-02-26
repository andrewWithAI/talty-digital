'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Typography } from '../atoms/Typography';
import { FormField } from '../molecules/FormField';
import { AnimatedButton } from '../atoms/AnimatedButton';
import { AnimatedSection, AnimatedItem } from '../atoms/AnimatedSection';
import { motion } from 'framer-motion';

interface ContactFormProps {
  title: string;
  description: string;
  className?: string;
}

export function ContactForm({
  title,
  description,
  className,
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // In a real application, you would send the form data to your backend
      // For now, we'll simulate a successful submission after a delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className={cn('py-16 md:py-24 bg-mint_cream-400/30 dark:bg-gunmetal-400/30', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection animation="fade" direction="up" className="text-center mb-10">
            <Typography 
              variant="h2" 
              className="mb-4 text-night-600 dark:text-mint_cream-500"
            >
              {title}
            </Typography>
            
            <Typography 
              variant="body-large" 
              className="text-davys_gray-400 dark:text-mint_cream-300"
            >
              {description}
            </Typography>
          </AnimatedSection>
          
          <motion.div 
            className="bg-mint_cream-500 dark:bg-gunmetal-500 rounded-lg shadow-md p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {submitSuccess ? (
              <motion.div 
                className="text-center py-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Typography variant="h3" className="mb-4 text-night-600 dark:text-mint_cream-500">
                  Thank You!
                </Typography>
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Your message has been sent successfully. We'll get back to you soon.
                </Typography>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <AnimatedSection animation="stagger" staggerChildren={0.1}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AnimatedItem animation="fade" direction="left">
                      <FormField
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        error={errors.name}
                        required
                      />
                    </AnimatedItem>
                    
                    <AnimatedItem animation="fade" direction="right">
                      <FormField
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={handleChange}
                        error={errors.email}
                        required
                      />
                    </AnimatedItem>
                  </div>
                  
                  <AnimatedItem animation="fade" direction="up" delay={0.2}>
                    <FormField
                      label="Subject"
                      name="subject"
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleChange}
                      error={errors.subject}
                      className="mt-6"
                    />
                  </AnimatedItem>
                  
                  <AnimatedItem animation="fade" direction="up" delay={0.3}>
                    <FormField
                      label="Message"
                      name="message"
                      type="textarea"
                      placeholder="Your message"
                      value={formData.message}
                      onChange={handleChange}
                      error={errors.message}
                      required
                      className="mt-6"
                    />
                  </AnimatedItem>
                  
                  <AnimatedItem animation="fade" direction="up" delay={0.4}>
                    <div className="mt-8">
                      <AnimatedButton
                        type="submit"
                        variant="primary"
                        className="w-full md:w-auto"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </AnimatedButton>
                    </div>
                  </AnimatedItem>
                </AnimatedSection>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}