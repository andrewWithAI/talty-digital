'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeIn, slideIn, scaleIn, staggerContainer } from '@/lib/animations';

type AnimationType = 'fade' | 'slide' | 'scale' | 'stagger';
type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number | 'some' | 'all';
  staggerChildren?: number;
  delayChildren?: number;
}

export function AnimatedSection({
  children,
  animation = 'fade',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
  once = true,
  amount = 0.3,
  staggerChildren = 0.1,
  delayChildren = 0,
  ...props
}: AnimatedSectionProps & Omit<HTMLMotionProps<'div'>, keyof AnimatedSectionProps>) {
  // Select the appropriate animation variant
  const getAnimationVariant = () => {
    switch (animation) {
      case 'fade':
        return fadeIn(direction, delay, duration);
      case 'slide':
        return slideIn(direction === 'none' ? 'up' : direction, delay, duration);
      case 'scale':
        return scaleIn(delay, duration);
      case 'stagger':
        return staggerContainer(staggerChildren, delayChildren);
      default:
        return fadeIn(direction, delay, duration);
    }
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      variants={getAnimationVariant()}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedItem({
  children,
  animation = 'fade',
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className,
  ...props
}: AnimatedSectionProps & Omit<HTMLMotionProps<'div'>, keyof AnimatedSectionProps>) {
  // Select the appropriate animation variant
  const getAnimationVariant = () => {
    switch (animation) {
      case 'fade':
        return fadeIn(direction, delay, duration);
      case 'slide':
        return slideIn(direction === 'none' ? 'up' : direction, delay, duration);
      case 'scale':
        return scaleIn(delay, duration);
      default:
        return fadeIn(direction, delay, duration);
    }
  };

  return (
    <motion.div
      className={cn(className)}
      variants={getAnimationVariant()}
      {...props}
    >
      {children}
    </motion.div>
  );
}