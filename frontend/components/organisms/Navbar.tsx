'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '../atoms/Logo';
import { NavItem } from '../molecules/NavItem';
import { AnimatedButton } from '../atoms/AnimatedButton';
import { Icon } from '../atoms/Icon';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Navigation items
  const navItems = [
    { label: 'Home', href: '/' },
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { label: 'Website Creation', href: '/services/website-creation' },
        { label: 'Social Media Planning', href: '/services/social-media' },
        { label: 'Website Improvements', href: '/services/website-improvements' },
        { label: 'AI Solutions', href: '/services/ai-solutions' },
        { label: 'CRM Administration', href: '/services/crm-administration' },
        { label: 'Branded Images', href: '/services/branded-images' },
      ]
    },
    { label: 'Blog', href: '/blog' },
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set hasAnimated to true after initial render
  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <header
      className={cn(
        // Base styles
        'fixed top-0 w-full z-50',
        
        // Frosted glass effect
        'backdrop-blur-md',
        
        // Border - visible only when scrolled
        scrolled ? 'border-b border-night-300/20 dark:border-night-400/20' : '',
        
        // Dynamic height and background based on scroll
        scrolled ? 'h-16' : 'h-20',
        scrolled ? 'bg-night-400/70' : 'bg-night-400/50',
        
        // Transition for smooth height and background changes
        'transition-all duration-300',
        
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div>
            <Logo variant="light" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label}>
                <NavItem
                  label={item.label}
                  href={item.href}
                  dropdown={item.dropdown}
                  className="text-mint_cream-500 hover:text-mint_cream-300"
                />
              </div>
            ))}
          </nav>
          
          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <AnimatedButton variant="primary" href="/contact">
              Contact Us
            </AnimatedButton>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-mint_cream-500 hover:bg-night-300/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-night-400 border-t border-night-300/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <NavItem
                      label={item.label}
                      href={item.href}
                      dropdown={item.dropdown}
                      mobile
                      className="text-mint_cream-500 hover:text-mint_cream-300"
                    />
                  </div>
                ))}
              </nav>
              <div className="mt-6">
                <AnimatedButton variant="primary" href="/contact" fullWidth>
                  Contact Us
                </AnimatedButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}