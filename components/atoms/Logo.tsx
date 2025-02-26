import React from 'react';
import Link from 'next/link';
import { Typography } from './Typography';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

export function Logo({ className, variant = 'light' }: LogoProps) {
  return (
    <Link href="/" className={cn('inline-flex items-center', className)}>
      <div className="flex items-center">
        <div className={cn(
          'font-bold text-2xl',
          variant === 'light' ? 'text-mint_cream-500' : 'text-night-600'
        )}>
          <Typography as="span" variant="h4" className="tracking-tight">
            Talty Digital
          </Typography>
        </div>
      </div>
    </Link>
  );
}