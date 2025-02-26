'use client';

import React from 'react';
import { Typography } from '@/frontend/components/atoms/Typography';
import { Button } from '@/frontend/components/atoms/Button';
import { Icon } from '@/frontend/components/atoms/Icon';
import Link from 'next/link';

export default function SocialMediaPage() {
  // Features of the service
  const features = [
    {
      title: "Strategy Development",
      description: "Custom social media strategies aligned with your business goals.",
      icon: "settings"
    },
    {
      title: "Content Creation",
      description: "Engaging content that resonates with your target audience.",
      icon: "file"
    },
    {
      title: "Platform Management",
      description: "Expert management of your social media platforms.",
      icon: "globe"
    },
    {
      title: "Community Engagement",
      description: "Active engagement with your followers to build community.",
      icon: "mail"
    },
    {
      title: "Analytics & Reporting",
      description: "Detailed analytics to track performance and ROI.",
      icon: "search"
    },
    {
      title: "Paid Advertising",
      description: "Strategic paid social campaigns to expand your reach.",
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
            Social Media Planning
          </Typography>
          <Typography 
            variant="body-large" 
            className="max-w-3xl text-davys_gray-400 dark:text-mint_cream-300"
          >
            Strategic social media planning and content creation to boost your online presence. 
            We help you connect with your audience and build a strong social media presence.
          </Typography>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Typography variant="h2" className="mb-6 text-night-600 dark:text-mint_cream-500">
              Our Approach
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              Social media has become an essential part of any business's marketing strategy. 
              It's a powerful tool for building brand awareness, engaging with customers, and 
              driving traffic to your website. However, managing social media effectively requires 
              time, expertise, and a strategic approach.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              At Talty Digital, we take a data-driven approach to social media planning. We start by 
              understanding your business, your goals, and your target audience. We then develop a 
              customized strategy that includes content creation, posting schedules, community 
              engagement, and performance tracking.
            </Typography>
            <Typography variant="body" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
              Our team stays up-to-date with the latest social media trends and algorithm changes, 
              ensuring that your strategy remains effective in the ever-changing social media landscape. 
              We focus on creating authentic, engaging content that resonates with your audience and 
              reflects your brand's voice and values.
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
                  Experienced social media strategists
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Platform-specific expertise (Instagram, Facebook, LinkedIn, Twitter, TikTok)
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Content creation that aligns with your brand
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Data-driven approach to maximize ROI
                </Typography>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-night-600 dark:text-night-700 mt-1 mr-2" />
                <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300">
                  Regular reporting and strategy adjustments
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
            Ready to Boost Your Social Media Presence?
          </Typography>
          <Typography variant="body" className="mb-6 max-w-2xl mx-auto">
            Contact us today to discuss how our social media planning services can help you 
            connect with your audience and grow your business online.
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