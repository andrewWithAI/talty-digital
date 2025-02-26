'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Logo } from '../atoms/Logo';
import { NavItem } from '../molecules/NavItem';
import { AnimatedButton } from '../atoms/AnimatedButton';
import { Icon } from '../atoms/Icon';
import { motion, AnimatePresence } from 'framer-motion';
import { navbarScroll, navbarScrollDark } from '@/lib/animations';

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <motion.header
      className={cn(
        // Base styles
        'fixed top-0 w-full z-50',
        
        // Frosted glass effect
        'backdrop-blur-md',
        
        // Border - visible only when scrolled
        scrolled ? 'border-b border-night-300/20 dark:border-night-400/20' : '',
        
        className
      )}
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      variants={{
        initial: {
          height: '5rem',
          backgroundColor: 'rgba(0, 15, 8, 0.5)',
          boxShadow: 'none',
        },
        scrolled: {
          height: '4rem',
          backgroundColor: 'rgba(0, 15, 8, 0.7)',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)',
        },
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo variant="light" />
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <NavItem
                  label={item.label}
                  href={item.href}
                  dropdown={item.dropdown}
                  className="text-mint_cream-500 hover:text-mint_cream-300"
                />
              </motion.div>
            ))}
          </nav>
          
          {/* CTA Button - Desktop */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedButton variant="primary" href="/contact">
              Contact Us
            </AnimatedButton>
          </motion.div>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-md text-mint_cream-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon name={mobileMenuOpen ? "close" : "menu"} />
          </motion.button>
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
              <motion.nav
                className="flex flex-col space-y-4"
                initial="initial"
                animate="animate"
                variants={{
                  initial: {},
                  animate: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.div
                    key={item.label}
                    variants={{
                      initial: { opacity: 0, x: -20 },
                      animate: { opacity: 1, x: 0 }
                    }}
                  >
                    <NavItem
                      label={item.label}
                      href={item.href}
                      dropdown={item.dropdown}
                      mobile
                      className="text-mint_cream-500 hover:text-mint_cream-300"
                    />
                  </motion.div>
                ))}
              </motion.nav>
              <motion.div
                className="mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <AnimatedButton variant="primary" href="/contact" fullWidth>
                  Contact Us
                </AnimatedButton>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}