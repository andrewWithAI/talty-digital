'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Typography } from '../atoms/Typography';
import { cardHover } from '@/lib/animations';

// Import icons from react-icons
import { FaGlobe, FaEnvelope, FaChevronRight, FaCog, FaPhone, FaImage, FaUsers } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  className?: string;
  animated?: boolean;
}

export function ServiceCard({
  title,
  description,
  icon,
  link,
  className,
  animated = false,
}: ServiceCardProps) {
  const cardClasses = cn(
    'block p-6 bg-mint_cream-500 dark:bg-gunmetal-400 rounded-lg',
    'border border-cadet_gray-200 dark:border-cadet_gray-700',
    'transition-all duration-200',
    link && 'hover:shadow-md hover:border-night-600/30 dark:hover:border-night-700/30',
    className
  );

  // Map icon names to react-icons components
  const getIcon = (iconName?: string) => {
    if (!iconName) return null;
    
    const iconSize = 24;
    const iconClassName = "text-night-600 dark:text-night-700";
    
    switch (iconName) {
      case 'globe':
        return <FaGlobe size={iconSize} className={iconClassName} />;
      case 'mail':
        return <FaEnvelope size={iconSize} className={iconClassName} />;
      case 'chevronRight':
        return <FaChevronRight size={iconSize} className={iconClassName} />;
      case 'settings':
        return <FaCog size={iconSize} className={iconClassName} />;
      case 'phone':
        return <FaPhone size={iconSize} className={iconClassName} />;
      case 'image':
        return <FaImage size={iconSize} className={iconClassName} />;
      case 'code':
        return <BiCodeAlt size={iconSize} className={iconClassName} />;
      case 'users':
        return <FaUsers size={iconSize} className={iconClassName} />;
      default:
        return <FaChevronRight size={iconSize} className={iconClassName} />;
    }
  };

  const content = (
    <>
      {icon && (
        <div className="mb-4 text-night-600 dark:text-night-700">
          {getIcon(icon)}
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
          {animated ? (
            <motion.div
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="ml-1"
            >
              <FaChevronRight size={16} />
            </motion.div>
          ) : (
            <div className="ml-1">
              <FaChevronRight size={16} />
            </div>
          )}
        </div>
      )}
    </>
  );

  // For animated cards
  if (animated) {
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

  // For non-animated cards
  if (link) {
    return (
      <Link href={link} className={cardClasses}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClasses}>
      {content}
    </div>
  );
}