# Talty Digital LLC Website - Directory Structure

This document outlines the recommended directory structure for the Talty Digital LLC website, focusing on component organization and following Next.js App Router conventions.

## Root Structure

```
talty-digital/
├── frontend/                 # Next.js frontend application
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout with navbar and footer
│   │   ├── page.tsx          # Homepage
│   │   ├── globals.css       # Global styles
│   │   ├── services/         # Services section
│   │   │   ├── layout.tsx    # Services layout
│   │   │   ├── page.tsx      # Services index
│   │   │   └── [service]/    # Dynamic service pages
│   │   │       └── page.tsx  # Individual service page
│   │   └── blog/             # Blog section
│   │       ├── layout.tsx    # Blog layout
│   │       ├── page.tsx      # Blog index
│   │       └── [slug]/       # Dynamic blog posts
│   │           └── page.tsx  # Individual blog post
│   ├── components/           # Reusable components
│   │   ├── atoms/            # Basic UI elements
│   │   ├── molecules/        # Combinations of atoms
│   │   ├── organisms/        # Complex UI sections
│   │   └── templates/        # Page layout templates
│   ├── lib/                  # Utility functions and shared code
│   │   ├── utils.ts          # General utilities
│   │   ├── constants.ts      # Constants and configuration
│   │   └── types.ts          # TypeScript type definitions
│   ├── public/               # Static assets
│   │   ├── images/           # Image assets
│   │   ├── fonts/            # Font files (if not using Google Fonts)
│   │   └── favicon.ico       # Favicon
│   ├── next.config.ts        # Next.js configuration
│   ├── tailwind.config.ts    # Tailwind CSS configuration
│   ├── postcss.config.mjs    # PostCSS configuration
│   ├── eslint.config.mjs     # ESLint configuration
│   ├── package.json          # Frontend dependencies
│   └── package-lock.json     # Frontend dependency lock file
├── functions/                # Cloud functions
├── memory-bank/              # Project documentation
├── docs/                     # Additional documentation
├── tsconfig.json             # Root TypeScript configuration
├── .gitignore                # Git ignore file
└── README.md                 # Project readme
```

## Component Directory Structure

### Atoms

```
frontend/components/atoms/
├── Button.tsx                # Button component
├── Input.tsx                 # Input field component
├── Logo.tsx                  # Logo component
├── Typography.tsx            # Typography components
├── Icon.tsx                  # Icon component
└── AnimatedButton.tsx        # Animated button component
```

### Molecules

```
frontend/components/molecules/
├── NavItem.tsx               # Navigation item
├── ServiceCard.tsx           # Service card component
├── FormField.tsx             # Form field with label
├── SocialLinks.tsx           # Social media links group
├── AnimatedServiceCard.tsx   # Animated service card component
└── CallToAction.tsx          # Call to action component
```

### Organisms

```
frontend/components/organisms/
├── Navbar.tsx                # Navigation bar with frosted glass effect
├── Footer.tsx                # Site footer
├── HeroSection.tsx           # Hero section for homepage
├── ServicesOverview.tsx      # Services overview section
└── ContactForm.tsx           # Contact form section
```

### Templates

```
frontend/components/templates/
├── PageLayout.tsx            # Standard page layout template
└── HomeTemplate.tsx          # Homepage-specific template
```

## Implementation Priority

1. **Core Components**
   - Navbar (with frosted glass effect)
   - Footer
   - Basic layout structure

2. **Homepage Sections**
   - Hero section
   - Services overview
   - Contact form

3. **Reusable Components**
   - Buttons
   - Typography
   - Service cards

4. **Additional Pages**
   - Services pages
   - Blog structure

## Component Implementation Guidelines

1. **File Naming**
   - Use PascalCase for component files
   - Use descriptive names that reflect component purpose

2. **Component Structure**
   - Export components as named exports
   - Include proper TypeScript typing
   - Add JSDoc comments for component documentation

3. **Styling Approach**
   - Use Tailwind CSS for styling
   - Create consistent class patterns
   - Extract common patterns to custom Tailwind classes when needed

4. **State Management**
   - Use React hooks for component state
   - Keep state as close to where it's used as possible
   - Use context for shared state when necessary