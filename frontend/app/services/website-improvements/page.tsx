'use client';

import React from 'react';
import { Typography } from '@/frontend/components/atoms/Typography';
import { Button } from '@/frontend/components/atoms/Button';
import { Icon } from '@/frontend/components/atoms/Icon';
import Link from 'next/link';

export default function WebsiteImprovementsPage() {
  // Features of the service
  const features = [
    {
      title: "Performance Optimization",
      description: "Speed up your website for better user experience and SEO rankings.",
      icon: "settings"
    },
    {
      title: "Responsive Design",
      description: "Ensure your website works perfectly on all devices and screen sizes.",
      icon: "phone"
    },
    {
      title: "UX Improvements",
      description: "Enhance user experience to increase engagement and conversions.",
      icon: "globe"
    },
    {
      title: "SEO Enhancements",
      description: "Optimize your website to rank higher in search engine results.",
      icon: "search"
    },
    {
      title: "Security Updates",
      description: "Protect your website from vulnerabilities and security threats.",
      icon: "file"
    },
    {
      title: "Analytics Integration",
      description: "Implement tracking to gain insights into user behavior.",
      icon: "image"
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
            Website Improvements
          </Typography>
          <Typography 
            variant="body-large" 
            className="max-w-3xl text-davys_gray-400 dark:text-mint_cream-300"
          >
            Enhance your existing website with modern features, better performance, and improved UX. 
            We optimize your website to provide a better user experience and increase conversions.
          </Typography>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Typography variant="h2" className="mb-6 text-night-600 dark:text-mint_cream-500">
              Our Approach
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              Is your website not performing as well as you'd like? Perhaps it's loading slowly, 
              not ranking well in search results, or not converting visitors into customers. 
              These are common issues that can significantly impact your business's online success.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              At Talty Digital, we specialize in website improvements that address these issues and more. 
              Our process begins with a comprehensive audit of your existing website to identify areas for 
              improvement. We look at factors such as page load speed, mobile responsiveness, user experience, 
              search engine optimization, and security.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              Based on our findings, we develop a customized improvement plan that prioritizes changes 
              that will have the biggest impact on your business goals. Our team of experienced developers 
              then implements these improvements, ensuring that your website not only looks better but also 
              performs better.
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
                  Comprehensive website audits
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Data-driven improvement recommendations
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Experienced development team
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Focus on measurable results
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
            Ready to Improve Your Website?
          </Typography>
          <Typography variant="body" className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how we can enhance your existing website to better 
            serve your business goals and provide a better experience for your users.
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