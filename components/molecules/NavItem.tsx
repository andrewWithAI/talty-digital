import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Icon } from '../atoms/Icon';

interface NavItemProps {
  label: string;
  href: string;
  dropdown?: {
    label: string;
    href: string;
  }[];
  mobile?: boolean;
  className?: string;
}

export function NavItem({ 
  label, 
  href, 
  dropdown, 
  mobile = false,
  className 
}: NavItemProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = pathname === href;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Base styles for all nav items
  const baseClasses = cn(
    'transition-colors duration-200',
    isActive
      ? 'text-mint_cream-300 font-medium'
      : 'text-mint_cream-500 hover:text-mint_cream-300',
    className
  );

  // If there's a dropdown menu
  if (dropdown && dropdown.length > 0) {
    return (
      <div className={cn('relative', mobile ? 'w-full' : '')}>
        <button
          onClick={toggleDropdown}
          className={cn(
            baseClasses,
            'flex items-center gap-1',
            mobile ? 'w-full justify-between' : ''
          )}
          aria-expanded={isOpen}
        >
          {label}
          <Icon 
            name={isOpen ? 'chevronDown' : 'chevronRight'} 
            size="small" 
            className="ml-1 transition-transform" 
          />
        </button>
        
        {isOpen && (
          <div
            className={cn(
              'bg-night-400 rounded-md shadow-md overflow-hidden',
              mobile
                ? 'mt-1 w-full'
                : 'absolute top-full left-0 mt-1 min-w-[200px] z-10'
            )}
          >
            <div className="py-1">
              {dropdown.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'block px-4 py-2 text-mint_cream-500 hover:bg-night-300',
                    pathname === item.href && 'bg-night-300 text-mint_cream-300'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Simple link if no dropdown
  return (
    <Link 
      href={href} 
      className={cn(
        baseClasses,
        mobile ? 'block w-full' : ''
      )}
    >
      {label}
    </Link>
  );
}