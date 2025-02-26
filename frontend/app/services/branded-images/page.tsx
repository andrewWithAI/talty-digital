'use client';

import React from 'react';
import { Typography } from '@/frontend/components/atoms/Typography';
import { Button } from '@/frontend/components/atoms/Button';
import { Icon } from '@/frontend/components/atoms/Icon';
import Link from 'next/link';

export default function BrandedImagesPage() {
  // Features of the service
  const features = [
    {
      title: "Logo Design",
      description: "Professional logo design that represents your brand identity.",
      icon: "image"
    },
    {
      title: "Social Media Graphics",
      description: "Eye-catching graphics optimized for various social platforms.",
      icon: "mail"
    },
    {
      title: "Website Imagery",
      description: "High-quality images that enhance your website's visual appeal.",
      icon: "globe"
    },
    {
      title: "Marketing Materials",
      description: "Branded materials for digital and print marketing campaigns.",
      icon: "file"
    },
    {
      title: "Brand Style Guides",
      description: "Comprehensive guides to ensure brand consistency.",
      icon: "settings"
    },
    {
      title: "Custom Illustrations",
      description: "Unique illustrations that bring your brand story to life.",
      icon: "phone"
    }
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/services" className="text-night-600 dark:text-mint_cream-300 hover:underline flex items-center">
            <Icon name="chevronLeft" size="small" className="mr-1" />
            <span>Back to Services</span>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-16">
          <Typography 
            variant="h1" 
            className="mb-4 text-night-600 dark:text-mint_cream-500"
          >
            Branded Images
          </Typography>
          <Typography 
            variant="body-large" 
            className="max-w-3xl text-davys_gray-400 dark:text-mint_cream-300"
          >
            Professional branded images and graphics that align with your brand identity. 
            We create visually appealing graphics that help you stand out from the competition.
          </Typography>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Typography variant="h2" className="mb-6 text-night-600 dark:text-mint_cream-500">
              Our Approach
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              In today's visual-centric digital landscape, high-quality branded images are essential 
              for making a strong impression and communicating your brand's message effectively. 
              From your website and social media to marketing materials and presentations, consistent 
              and professional imagery helps build brand recognition and trust.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              At Talty Digital, we understand the power of visual communication. Our approach to 
              creating branded images begins with understanding your brand identity, values, and 
              target audience. We then develop a visual strategy that aligns with these elements 
              and creates a cohesive look and feel across all your digital and print materials.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              Our team of experienced designers combines creativity with strategic thinking to 
              create images that not only look great but also serve your business objectives. 
              Whether you need a complete visual identity system or specific graphics for a 
              campaign, we have the expertise to deliver high-quality results that make an impact.
            </Typography>
          </div>
          <div className="bg-mint_cream-500 dark:bg-gunmetal-400 p-6 rounded-lg border border-cadet_gray-200 dark:border-cadet_gray-700 h-fit">
            <Typography variant="h3" className="mb-4 text-night-600 dark:text-mint_cream-500">
              Why Choose Us?
            </Typography>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Experienced design professionals
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Strategic approach to visual communication
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Consistent brand representation across platforms
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  High-quality, professional results
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Flexible solutions for businesses of all sizes
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <Typography variant="h2" className="mb-8 text-center text-night-600 dark:text-mint_cream-500">
            What We Offer
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-mint_cream-500 dark:bg-gunmetal-400 p-6 rounded-lg border border-cadet_gray-200 dark:border-cadet_gray-700"
              >
                <div className="mb-4 text-night-600 dark:text-night-700">
                  <Icon name={feature.icon} size="large" />
                </div>
                <Typography variant="h4" className="mb-2">
                  {feature.title}
                </Typography>
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-night-400 text-mint_cream-500 rounded-lg p-8 text-center">
          <Typography variant="h3" className="mb-4">
            Ready to Elevate Your Brand's Visual Identity?
          </Typography>
          <Typography variant="body" className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our branded images services can help you create 
            a strong visual presence that resonates with your audience and strengthens your brand.
          </Typography>
          <Link href="/contact">
            <Button variant="primary" size="large">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}