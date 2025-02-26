import { Variants } from 'framer-motion';

// Fade in animation
export const fadeIn = (
  direction: 'up' | 'down' | 'left' | 'right' | 'none' = 'none',
  delay: number = 0,
  duration: number = 0.5
): Variants => {
  return {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 20 : direction === 'down' ? -20 : 0,
      x: direction === 'left' ? 20 : direction === 'right' ? -20 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: 'tween',
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

// Slide in animation
export const slideIn = (
  direction: 'up' | 'down' | 'left' | 'right',
  delay: number = 0,
  duration: number = 0.5
): Variants => {
  return {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
      y: direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: 'tween',
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };
};

// Scale animation
export const scaleIn = (
  delay: number = 0,
  duration: number = 0.5
): Variants => {
  return {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        duration,
        delay,
        bounce: 0.3,
      },
    },
  };
};

// Stagger children animation
export const staggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
};

// Hover animation for cards
export const cardHover = {
  rest: {
    scale: 1,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.03,
    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
};

// Button hover animation
export const buttonHover = {
  rest: {
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: 'easeInOut',
    },
  },
};

// Navbar scroll animation
export const navbarScroll = (scrolled: boolean) => ({
  backgroundColor: scrolled 
    ? 'rgba(244, 255, 248, 0.8)' 
    : 'rgba(244, 255, 248, 0.5)',
  boxShadow: scrolled 
    ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' 
    : 'none',
  height: scrolled ? '4rem' : '5rem',
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
});

// Dark mode version of navbar scroll animation
export const navbarScrollDark = (scrolled: boolean) => ({
  backgroundColor: scrolled 
    ? 'rgba(28, 55, 56, 0.8)' 
    : 'rgba(28, 55, 56, 0.5)',
  boxShadow: scrolled 
    ? '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)' 
    : 'none',
  height: scrolled ? '4rem' : '5rem',
  transition: {
    duration: 0.3,
    ease: 'easeInOut',
  },
});