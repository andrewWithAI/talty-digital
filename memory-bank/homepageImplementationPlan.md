# Talty Digital LLC Website - Homepage Implementation Plan

This document outlines the step-by-step implementation plan for building the homepage with a frosted glass navbar effect.

## Implementation Phases

### Phase 1: Setup and Core Components

1. **Create Component Directory Structure**
   - Create the component directories following the structure in `directoryStructure.md`
   - Set up the atomic design folder structure (atoms, molecules, organisms, templates)

2. **Implement Core Atom Components**
   - Create the Logo component
   - Implement Button component with variants
   - Create Typography components for consistent text styling
   - Implement Input components for the contact form

3. **Set Up Global Styling**
   - Update globals.css with base styles
   - Configure color variables for light/dark mode
   - Set up font configuration

### Phase 2: Navbar with Frosted Glass Effect

1. **Create NavItem Molecule**
   - Implement the navigation item component
   - Add support for dropdown menus
   - Handle active states

2. **Implement Navbar Organism**
   - Create the navbar component with frosted glass effect
   - Implement responsive behavior
   - Add mobile menu functionality
   - Apply the frosted glass styling:
     ```tsx
     <header className="fixed top-0 w-full z-50 
                       bg-mint_cream/70 dark:bg-gunmetal/70
                       backdrop-blur-md
                       border-b border-mint_cream/10 dark:border-cadet_gray/10
                       transition-all duration-200">
       {/* Navbar content */}
     </header>
     ```

3. **Test Navbar Functionality**
   - Verify frosted glass effect works properly
   - Test responsive behavior
   - Ensure mobile menu functions correctly

### Phase 3: Homepage Sections

1. **Hero Section**
   - Create the hero section component
   - Implement responsive layout
   - Add call-to-action button
   - Apply appropriate typography and spacing

2. **Services Overview Section**
   - Implement ServiceCard molecule
   - Create the ServicesOverview organism
   - Set up responsive grid layout
   - Add content and styling

3. **About/Value Proposition Section**
   - Create section component
   - Implement layout and styling
   - Add content with appropriate typography

4. **Contact Form Section**
   - Implement FormField molecule
   - Create ContactForm organism
   - Add form validation
   - Implement submission handling (placeholder for now)

5. **Footer Component**
   - Create Footer organism
   - Add navigation links, social media, and company info
   - Implement responsive layout

### Phase 4: Page Integration

1. **Update Root Layout**
   - Modify app/layout.tsx to include the Navbar and Footer
   - Set up metadata and global styles

2. **Implement Homepage**
   - Update app/page.tsx to include all homepage sections
   - Ensure proper ordering and spacing
   - Apply consistent styling

3. **Responsive Testing**
   - Test on multiple viewport sizes
   - Verify all components respond appropriately
   - Fix any layout issues

### Phase 5: Refinement and Optimization

1. **Performance Optimization**
   - Optimize images using Next.js Image component
   - Implement proper loading strategies
   - Add appropriate caching

2. **Accessibility Improvements**
   - Verify semantic HTML structure
   - Test keyboard navigation
   - Check color contrast
   - Add appropriate ARIA attributes

3. **Final Polish**
   - Add subtle animations and transitions
   - Refine spacing and alignment
   - Ensure consistent styling across all components

## Code Snippets

### Navbar Component (Frosted Glass Effect)

```tsx
// components/organisms/Navbar.tsx
'use client';

import { useState } from 'react';
import { Logo } from '@/components/atoms/Logo';
import { NavItem } from '@/components/molecules/NavItem';
import { Button } from '@/components/atoms/Button';

interface NavbarProps {
  navItems: {
    label: string;
    href: string;
    dropdown?: {
      label: string;
      href: string;
    }[];
  }[];
}

export function Navbar({ navItems }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 
                      bg-mint_cream/70 dark:bg-gunmetal/70
                      backdrop-blur-md
                      border-b border-mint_cream/10 dark:border-cadet_gray/10
                      transition-all duration-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavItem 
                key={item.label} 
                label={item.label} 
                href={item.href} 
                dropdown={item.dropdown} 
              />
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="primary">Contact Us</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {/* Hamburger Icon */}
            <div className="w-6 h-6 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-davys_gray-500 dark:bg-mint_cream-500 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-davys_gray-500 dark:bg-mint_cream-500 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block h-0.5 w-full bg-davys_gray-500 dark:bg-mint_cream-500 transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-mint_cream dark:bg-gunmetal border-t border-cadet_gray-200 dark:border-cadet_gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <NavItem 
                  key={item.label} 
                  label={item.label} 
                  href={item.href} 
                  dropdown={item.dropdown} 
                  mobile
                />
              ))}
            </nav>
            <div className="mt-6">
              <Button variant="primary" fullWidth>Contact Us</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
```

### Hero Section Component

```tsx
// components/organisms/HeroSection.tsx
import { Typography } from '@/components/atoms/Typography';
import { Button } from '@/components/atoms/Button';
import Image from 'next/image';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-night-400/10 to-gunmetal-500/20 dark:from-night-500 dark:to-gunmetal-600 z-0" />
      
      {/* Optional background image */}
      {backgroundImage && (
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover mix-blend-overlay opacity-20 z-0"
          priority
        />
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Typography variant="h1" className="mb-6">
            {title}
          </Typography>
          
          <Typography variant="body-large" className="mb-8 text-davys_gray-400 dark:text-mint_cream-300">
            {subtitle}
          </Typography>
          
          <Button variant="primary" href={ctaLink} size="large">
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
```

## Implementation Timeline

| Task | Estimated Time | Dependencies |
|------|----------------|--------------|
| Setup component structure | 1 hour | None |
| Implement atom components | 3 hours | Component structure |
| Set up global styling | 2 hours | None |
| Create NavItem component | 1 hour | Button component |
| Implement Navbar with frosted glass | 3 hours | NavItem component |
| Create Hero section | 2 hours | Typography, Button components |
| Implement Services overview | 3 hours | Typography, ServiceCard components |
| Create Contact form | 3 hours | Input, Button components |
| Implement Footer | 2 hours | Typography, NavItem components |
| Integrate all sections in homepage | 2 hours | All section components |
| Responsive testing and fixes | 3 hours | Complete homepage |
| Accessibility improvements | 2 hours | Complete homepage |
| Final polish | 2 hours | Complete homepage |

**Total Estimated Time: 27 hours**

## Next Steps After Homepage Implementation

1. Implement individual service pages
2. Create blog structure and templates
3. Set up content management for blog posts
4. Implement additional features based on requirements