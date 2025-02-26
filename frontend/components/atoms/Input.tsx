import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  error?: string;
}

export function Input({ className, error, ...props }: InputProps) {
  return (
    <div className="w-full">
      <input
        className={cn(
          'w-full px-4 py-2 bg-mint_cream-500 dark:bg-gunmetal-300 border rounded-md',
          'focus:outline-none focus:ring-2 focus:ring-night-600/50 dark:focus:ring-mint_cream-400/50',
          'transition-colors duration-200',
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' 
            : 'border-cadet_gray-300 dark:border-cadet_gray-600 focus:border-night-600 dark:focus:border-mint_cream-400',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  error?: string;
}

export function Textarea({ className, error, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      <textarea
        className={cn(
          'w-full px-4 py-2 bg-mint_cream-500 dark:bg-gunmetal-300 border rounded-md',
          'focus:outline-none focus:ring-2 focus:ring-night-600/50 dark:focus:ring-mint_cream-400/50',
          'transition-colors duration-200',
          error 
            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/50' 
            : 'border-cadet_gray-300 dark:border-cadet_gray-600 focus:border-night-600 dark:focus:border-mint_cream-400',
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}