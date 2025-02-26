import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Typography } from '../atoms/Typography';
import { Icon } from '../atoms/Icon';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  link?: string;
  className?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
  link,
  className,
}: ServiceCardProps) {
  const cardClasses = cn(
    'block p-6 bg-mint_cream-500 dark:bg-gunmetal-400 rounded-lg',
    'border border-cadet_gray-200 dark:border-cadet_gray-700',
    'transition-all duration-200',
    link && 'hover:shadow-md hover:border-night-600/30 dark:hover:border-night-700/30',
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
        <div className="flex items-center text-night-600 dark:text-night-700 font-medium">
          <span>Learn more</span>
          <Icon name="chevronRight" size="small" className="ml-1" />
        </div>
      )}
    </>
  );

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