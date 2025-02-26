'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Typography } from '../atoms/Typography';
import { AnimatedServiceCard } from '../molecules/AnimatedServiceCard';
import { AnimatedButton } from '../atoms/AnimatedButton';
import { AnimatedSection, AnimatedItem } from '../atoms/AnimatedSection';

interface Service {
  title: string;
  description: string;
  icon?: string;
  link: string;
}

interface ServicesOverviewProps {
  title: string;
  description: string;
  services: Service[];
  showAllLink?: string;
  className?: string;
}

export function ServicesOverview({
  title,
  description,
  services,
  showAllLink,
  className,
}: ServicesOverviewProps) {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection animation="fade" direction="up" className="text-center mb-12">
          <Typography
            variant="h2"
            className="mb-4 text-night-600 dark:text-mint_cream-500"
          >
            {title}
          </Typography>
          
          <Typography
            variant="body-large"
            className="max-w-2xl mx-auto text-davys_gray-400 dark:text-mint_cream-300"
          >
            {description}
          </Typography>
        </AnimatedSection>
        
        <AnimatedSection
          animation="stagger"
          staggerChildren={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <AnimatedItem
              key={index}
              animation="scale"
              delay={index * 0.1}
            >
              <AnimatedServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
              />
            </AnimatedItem>
          ))}
        </AnimatedSection>
        
        {showAllLink && (
          <AnimatedSection animation="fade" direction="up" delay={0.3} className="mt-12 text-center">
            <AnimatedButton
              variant="outline"
              href={showAllLink}
            >
              View All Services
            </AnimatedButton>
          </AnimatedSection>
        )}
      </div>
    </section>
  );
}