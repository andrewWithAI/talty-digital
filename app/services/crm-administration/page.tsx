'use client';

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import Link from 'next/link';

export default function CrmAdministrationPage() {
  // Features of the service
  const features = [
    {
      title: "CRM Setup",
      description: "Complete setup and configuration of your CRM system.",
      icon: "settings"
    },
    {
      title: "Data Migration",
      description: "Seamless migration of your existing customer data.",
      icon: "file"
    },
    {
      title: "User Training",
      description: "Comprehensive training for your team on CRM usage.",
      icon: "globe"
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline processes.",
      icon: "mail"
    },
    {
      title: "Custom Reporting",
      description: "Create custom reports to track key metrics and KPIs.",
      icon: "search"
    },
    {
      title: "Ongoing Support",
      description: "Continuous support and optimization of your CRM system.",
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
            CRM Administration
          </Typography>
          <Typography 
            variant="body-large" 
            className="max-w-3xl text-davys_gray-400 dark:text-mint_cream-300"
          >
            Efficient customer relationship management setup and administration. 
            We help you manage your customer relationships effectively to improve customer satisfaction and loyalty.
          </Typography>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Typography variant="h2" className="mb-6 text-night-600 dark:text-mint_cream-500">
              Our Approach
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              A well-implemented Customer Relationship Management (CRM) system is essential for 
              businesses looking to manage customer interactions effectively, streamline sales 
              processes, and improve customer service. However, setting up and administering a 
              CRM system can be complex and time-consuming.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              At Talty Digital, we take the hassle out of CRM administration. Our approach begins 
              with understanding your business processes, customer journey, and specific needs. 
              We then configure your CRM system to align with these requirements, ensuring that 
              it supports your business goals and workflows.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              Whether you're implementing a new CRM system or looking to optimize an existing one, 
              our team has the expertise to help. We specialize in popular CRM platforms such as 
              Salesforce, HubSpot, and Zoho, and can provide end-to-end services from initial setup 
              to ongoing administration and support.
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
                  Expertise in leading CRM platforms
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Customized solutions tailored to your business needs
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Seamless data migration and integration
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Comprehensive user training and documentation
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
            Ready to Optimize Your Customer Relationships?
          </Typography>
          <Typography variant="body" className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our CRM administration services can help you 
            manage your customer relationships more effectively and drive business growth.
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