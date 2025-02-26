'use client';

import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { ServiceCard } from '@/components/molecules/ServiceCard';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';

export default function ServicesPage() {
  // Services data
  const services = [
    {
      title: "Website Creation & Management",
      description: "Custom website design and development tailored to your brand and business needs. We create responsive, user-friendly websites that help you achieve your business goals.",
      icon: "globe",
      link: "/services/website-creation",
    },
    {
      title: "Social Media Planning",
      description: "Strategic social media planning and content creation to boost your online presence. We help you connect with your audience and build a strong social media presence.",
      icon: "mail",
      link: "/services/social-media",
    },
    {
      title: "Website Improvements",
      description: "Enhance your existing website with modern features, better performance, and improved UX. We optimize your website to provide a better user experience and increase conversions.",
      icon: "chevronRight",
      link: "/services/website-improvements",
    },
    {
      title: "AI Solutions",
      description: "Leverage AI technologies to automate processes and gain valuable insights. We help you implement AI solutions that streamline your operations and drive business growth.",
      icon: "settings",
      link: "/services/ai-solutions",
    },
    {
      title: "CRM Administration",
      description: "Efficient customer relationship management setup and administration. We help you manage your customer relationships effectively to improve customer satisfaction and loyalty.",
      icon: "phone",
      link: "/services/crm-administration",
    },
    {
      title: "Branded Images",
      description: "Professional branded images and graphics that align with your brand identity. We create visually appealing graphics that help you stand out from the competition.",
      icon: "image",
      link: "/services/branded-images",
    },
  ];

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Typography 
            variant="h1" 
            className="mb-4 text-night-600 dark:text-mint_cream-500"
          >
            Our Services
          </Typography>
          <Typography 
            variant="body-large" 
            className="max-w-3xl mx-auto text-davys_gray-400 dark:text-mint_cream-300"
          >
            We offer a comprehensive range of digital services to help your business thrive online. 
            From website creation to AI solutions, we have the expertise to elevate your digital presence.
          </Typography>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-night-400 text-mint_cream-500 rounded-lg p-8 text-center">
          <Typography variant="h3" className="mb-4">
            Ready to Get Started?
          </Typography>
          <Typography variant="body" className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve your business goals.
            We're here to help you succeed in the digital landscape.
          </Typography>
          <Link href="/contact">
            <Button variant="primary" size="large">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}