'use client';

import React from 'react';
import { ServiceCard } from './ServiceCard';

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
  // Simply use the ServiceCard component with animated=true
  return (
    <ServiceCard
      title={title}
      description={description}
      icon={icon}
      link={link}
      className={className}
      animated={true}
    />
  );
}