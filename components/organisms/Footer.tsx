'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Typography } from '../atoms/Typography';
import { Logo } from '../atoms/Logo';
import { SocialLinks, socialIcons } from '../molecules/SocialLinks';
import { AnimatedSection, AnimatedItem } from '../atoms/AnimatedSection';
import { motion } from 'framer-motion';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  columns: FooterColumn[];
  className?: string;
}

export function Footer({ columns, className }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  // Social media platforms
  const socialPlatforms = [
    { name: 'Twitter', url: 'https://twitter.com/taltydigital', icon: socialIcons.twitter },
    { name: 'Facebook', url: 'https://facebook.com/taltydigital', icon: socialIcons.facebook },
    { name: 'Instagram', url: 'https://instagram.com/taltydigital', icon: socialIcons.instagram },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/taltydigital', icon: socialIcons.linkedin },
  ];

  return (
    <footer className={cn('bg-mint_cream-400/30 dark:bg-gunmetal-400/30', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <AnimatedSection animation="stagger" staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Company Info */}
          <AnimatedItem animation="fade" direction="up">
            <div>
              <Logo className="mb-4" />
              <Typography variant="body-small" className="mb-6 text-davys_gray-400 dark:text-mint_cream-300">
                Talty Digital LLC provides full-service web development and software engineering solutions to help businesses enhance their online presence.
              </Typography>
              <SocialLinks platforms={socialPlatforms} />
            </div>
          </AnimatedItem>
          
          {/* Footer Columns */}
          {columns.map((column, index) => (
            <AnimatedItem key={index} animation="fade" direction="up" delay={index * 0.1}>
              <div>
                <Typography variant="h6" className="mb-4 text-night-600 dark:text-mint_cream-500">
                  {column.title}
                </Typography>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (linkIndex * 0.05) }}
                    >
                      <Link
                        href={link.href}
                        className="text-davys_gray-500 dark:text-mint_cream-400 hover:text-night-600 dark:hover:text-night-700 transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedSection>
        
        <AnimatedSection animation="fade" direction="up" delay={0.5}>
          <div className="border-t border-cadet_gray-200 dark:border-cadet_gray-700 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Typography variant="caption" className="text-davys_gray-400 dark:text-mint_cream-300 mb-4 md:mb-0">
                © {currentYear} Talty Digital LLC. All rights reserved.
              </Typography>
              
              <div className="flex space-x-6">
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="/privacy-policy"
                    className="text-davys_gray-500 dark:text-mint_cream-400 hover:text-night-600 dark:hover:text-night-700 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                  <Link
                    href="/terms-of-service"
                    className="text-davys_gray-500 dark:text-mint_cream-400 hover:text-night-600 dark:hover:text-night-700 transition-colors text-sm"
                  >
                    Terms of Service
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}