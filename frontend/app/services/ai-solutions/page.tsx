'use client';

import React from 'react';
import { Typography } from '@/frontend/components/atoms/Typography';
import { Button } from '@/frontend/components/atoms/Button';
import { Icon } from '@/frontend/components/atoms/Icon';
import Link from 'next/link';

export default function AiSolutionsPage() {
  // Features of the service
  const features = [
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI technologies into your existing systems.",
      icon: "settings"
    },
    {
      title: "Chatbot Development",
      description: "Custom chatbots to enhance customer service and automate responses.",
      icon: "mail"
    },
    {
      title: "Data Analysis",
      description: "AI-powered data analysis to uncover insights and trends.",
      icon: "search"
    },
    {
      title: "Process Automation",
      description: "Automate repetitive tasks to improve efficiency and reduce errors.",
      icon: "file"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends and behaviors to make data-driven decisions.",
      icon: "globe"
    },
    {
      title: "Custom AI Solutions",
      description: "Tailored AI solutions designed for your specific business needs.",
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
            AI Solutions
          </Typography>
          <Typography 
            variant="body-large" 
            className="max-w-3xl text-davys_gray-400 dark:text-mint_cream-300"
          >
            Leverage AI technologies to automate processes and gain valuable insights. 
            We help you implement AI solutions that streamline your operations and drive business growth.
          </Typography>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Typography variant="h2" className="mb-6 text-night-600 dark:text-mint_cream-500">
              Our Approach
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              Artificial Intelligence (AI) is transforming the way businesses operate, providing 
              unprecedented opportunities for automation, insight, and innovation. However, 
              implementing AI solutions effectively requires specialized knowledge and expertise.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              At Talty Digital, we make AI accessible and practical for businesses of all sizes. 
              Our approach begins with understanding your business challenges and identifying 
              opportunities where AI can provide the most value. We then develop and implement 
              custom AI solutions that address these specific needs.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              Whether you're looking to automate customer service with chatbots, gain insights 
              from your data with machine learning, or streamline operations with process automation, 
              our team has the expertise to help you leverage AI effectively. We focus on practical, 
              results-driven solutions that deliver measurable business value.
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
                  Expertise in modern AI technologies
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Custom solutions tailored to your business needs
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Focus on practical, results-driven applications
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Seamless integration with existing systems
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Ongoing support and optimization
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
            Ready to Leverage AI for Your Business?
          </Typography>
          <Typography variant="body" className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our AI solutions can help you automate processes, 
            gain valuable insights, and drive business growth.
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
