import React from 'react';
import { cn } from '@/lib/utils';

type TypographyVariant = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'h4' 
  | 'h5' 
  | 'h6' 
  | 'body-large' 
  | 'body' 
  | 'body-small' 
  | 'caption';

type TypographyProps = {
  variant?: TypographyVariant;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function Typography({ 
  variant = 'body', 
  children, 
  className, 
  as,
  ...props 
}: TypographyProps) {
  const variantClasses = {
    'h1': 'text-4xl md:text-5xl font-bold',
    'h2': 'text-3xl md:text-4xl font-bold',
    'h3': 'text-2xl md:text-3xl font-semibold',
    'h4': 'text-xl md:text-2xl font-semibold',
    'h5': 'text-lg md:text-xl font-semibold',
    'h6': 'text-base md:text-lg font-semibold',
    'body-large': 'text-lg font-normal',
    'body': 'text-base font-normal',
    'body-small': 'text-sm font-normal',
    'caption': 'text-xs font-normal',
  };

  const Component = as || getDefaultElement(variant);

  return (
    <Component 
      className={cn(variantClasses[variant], className)} 
      {...props}
    >
      {children}
    </Component>
  );
}

function getDefaultElement(variant: TypographyVariant): React.ElementType {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    case 'body-large':
    case 'body':
    case 'body-small':
      return 'p';
    case 'caption':
      return 'span';
    default:
      return 'p';
  }
}