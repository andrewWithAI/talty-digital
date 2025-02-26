'use client';

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Typography } from '../atoms/Typography';
import { AnimatedButton } from '../atoms/AnimatedButton';
import { AnimatedSection } from '../atoms/AnimatedSection';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
  className?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
  className,
}: HeroSectionProps) {
  return (
    <section
      className={cn(
        'relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden',
        className
      )}
    >
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-400/10 to-gunmetal-500/20 dark:from-night-500 dark:to-gunmetal-600 z-0" />
      
      {/* Optional background image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover mix-blend-overlay opacity-20 z-0"
          priority
        />
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade" direction="up" delay={0.2}>
            <Typography
              variant="h1"
              className="mb-6 text-night-600 dark:text-mint_cream-500"
            >
              {title}
            </Typography>
          </AnimatedSection>
          
          <AnimatedSection animation="fade" direction="up" delay={0.4}>
            <Typography
              variant="body-large"
              className="mb-8 text-davys_gray-400 dark:text-mint_cream-300"
            >
              {subtitle}
            </Typography>
          </AnimatedSection>
          
          <AnimatedSection animation="fade" direction="up" delay={0.6}>
            <AnimatedButton
              variant="primary"
              href={ctaLink}
              size="large"
            >
              {ctaText}
            </AnimatedButton>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}