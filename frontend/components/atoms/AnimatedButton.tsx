'use client';

import React from 'react';
import Link from 'next/link';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { buttonHover } from '@/lib/animations';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

interface AnimatedButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function AnimatedButton({
  variant = 'primary',
  size = 'medium',
  href,
  fullWidth = false,
  children,
  className,
  ...props
}: AnimatedButtonProps & Omit<HTMLMotionProps<'button'>, keyof AnimatedButtonProps>) {
  const variantClasses = {
    primary: 'bg-night-600 text-mint_cream-500 hover:bg-night-700 active:bg-night-800',
    secondary: 'bg-gunmetal-500 text-mint_cream-500 hover:bg-gunmetal-600 active:bg-gunmetal-700',
    outline: 'bg-transparent border border-night-600 text-night-600 dark:border-mint_cream-500 dark:text-mint_cream-500 hover:bg-night-600/10 dark:hover:bg-mint_cream-500/10',
    text: 'bg-transparent text-night-600 dark:text-mint_cream-500 hover:bg-night-600/10 dark:hover:bg-mint_cream-500/10',
  };

  const sizeClasses = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-5 py-2.5',
    large: 'text-lg px-6 py-3',
  };

  const baseClasses = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-night-600/50 dark:focus:ring-mint_cream-500/50 disabled:opacity-50 disabled:pointer-events-none';

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className
  );

  if (href) {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="tap"
        variants={buttonHover}
        className="inline-block"
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      className={classes}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={buttonHover}
      {...props}
    >
      {children}
    </motion.button>
  );
}