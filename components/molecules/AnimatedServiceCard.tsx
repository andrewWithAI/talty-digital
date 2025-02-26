'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';
import { cardHover } from '@/lib/animations';

interface AnimatedServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  className?: string;
}

export function AnimatedServiceCard({
  title,
  description,
  icon,
  link,
  className,
}: AnimatedServiceCardProps) {
  const cardClasses = cn(
    'block p-6 bg-mint_cream-500 dark:bg-gunmetal-400 rounded-lg',
    'border border-cadet_gray-200 dark:border-cadet_gray-700',
    'transition-all duration-200',
    className
  );

  const content = (
    <>
      {icon && (
        <div className="mb-4 text-night-600 dark:text-night-700">
          <Icon name={icon} size="large" />
        </div>
      )}
      
      <Typography variant="h4" className="mb-2">
        {title}
      </Typography>
      
      <Typography variant="body" className="text-davys_gray-400 dark:text-mint_cream-300 mb-4">
        {description}
      </Typography>
      
      {link && (
        <div className="flex items-center text-night-600 dark:text-night-700 font-medium group">
          <span>Learn more</span>
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <Icon name="chevronRight" size="small" className="ml-1" />
          </motion.div>
        </div>
      )}
    </>
  );

  if (link) {
    return (
      <motion.div
        initial="rest"
        whileHover="hover"
        whileTap="rest"
        variants={cardHover}
      >
        <Link href={link} className={cardClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cardClasses}
      initial="rest"
      whileHover="hover"
      whileTap="rest"
      variants={cardHover}
    >
      {content}
    </motion.div>
  );
}