'use client';

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import Link from 'next/link';

export default function WebsiteCreationPage() {
  // Features of the service
  const features = [
    {
      title: "Custom Design",
      description: "Unique designs tailored to your brand identity and business goals.",
      icon: "image"
    },
    {
      title: "Responsive Development",
      description: "Websites that look and function perfectly on all devices and screen sizes.",
      icon: "phone"
    },
    {
      title: "SEO Optimization",
      description: "Built-in search engine optimization to help your site rank higher.",
      icon: "search"
    },
    {
      title: "Content Management",
      description: "Easy-to-use content management systems so you can update your site.",
      icon: "file"
    },
    {
      title: "Performance Focused",
      description: "Fast-loading pages that provide an excellent user experience.",
      icon: "settings"
    },
    {
      title: "Ongoing Support",
      description: "Continued maintenance and support to keep your website running smoothly.",
      icon: "mail"
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
            Website Creation & Management
          </Typography>
          <Typography 
            variant="body-large" 
            className="max-w-3xl text-davys_gray-400 dark:text-mint_cream-300"
          >
            Custom website design and development tailored to your brand and business needs. 
            We create responsive, user-friendly websites that help you achieve your business goals.
          </Typography>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Typography variant="h2" className="mb-6 text-night-600 dark:text-mint_cream-500">
              Our Approach
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              At Talty Digital, we believe that your website is the digital storefront of your business. 
              It's often the first impression potential customers have of your brand, which is why we take 
              a strategic approach to website creation.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              Our process begins with understanding your business, your goals, and your target audience. 
              We then create a custom design that reflects your brand identity and appeals to your ideal customers. 
              Our development team brings this design to life with clean, efficient code that ensures your 
              website is fast, responsive, and user-friendly.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              We also focus on search engine optimization (SEO) from the ground up, ensuring that your 
              website is built to rank well in search results. This helps potential customers find you 
              more easily, increasing your online visibility and driving more traffic to your site.
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
                  Experienced team of designers and developers
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Custom solutions tailored to your specific needs
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Focus on user experience and conversion optimization
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  SEO-friendly development practices
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Ongoing support and maintenance
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
            Ready to Create Your Dream Website?
          </Typography>
          <Typography variant="body" className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your website project. We'll work with you to create a 
            website that not only looks great but also helps you achieve your business goals.
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