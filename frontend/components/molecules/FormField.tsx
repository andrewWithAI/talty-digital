import React from 'react';
import { cn } from '@/lib/utils';
import { Typography } from '../atoms/Typography';
import { Input, Textarea } from '../atoms/Input';

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
  className?: string;
}

export function FormField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  required = false,
  className,
  ...props
}: FormFieldProps) {
  return (
    <div className={cn('mb-4', className)}>
      <label htmlFor={name} className="block mb-2">
        <Typography variant="body-small" className="font-medium text-davys_gray-500 dark:text-mint_cream-500">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Typography>
      </label>
      
      {type === 'textarea' ? (
        <Textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
          required={required}
          rows={4}
          {...props}
        />
      ) : (
        <Input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          error={error}
          required={required}
          {...props}
        />
      )}
    </div>
  );
}