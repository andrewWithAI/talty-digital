# Talty Digital LLC Website - Design System

This document outlines the design system for the Talty Digital LLC website, including color palette, typography, spacing, and component styling guidelines.

## Color Palette

The color palette is defined in the tailwind.config.ts file and consists of the following colors:

### Primary Colors

**Night (Dark Green/Black)**
- Primary brand color
- Used for primary actions, important UI elements, and dark backgrounds
- Variants:
  - night-DEFAULT: #000f08 (Base)
  - night-100 to night-900: Ranging from darkest (#000302) to lightest (#9cffd1)

**Gunmetal (Dark Teal)**
- Secondary brand color
- Used for secondary UI elements, accents, and dark backgrounds
- Variants:
  - gunmetal-DEFAULT: #1c3738 (Base)
  - gunmetal-100 to gunmetal-900: Ranging from darkest (#050b0b) to lightest (#c6e1e2)

### Secondary Colors

**Davys Gray (Medium Gray)**
- Used for text, borders, and subtle UI elements
- Variants:
  - davys_gray-DEFAULT: #4d4847 (Base)
  - davys_gray-100 to davys_gray-900: Ranging from darkest (#0f0e0e) to lightest (#dcdad9)

**Mint Cream (Very Light Green/White)**
- Used for backgrounds, cards, and light UI elements
- Variants:
  - mint_cream-DEFAULT: #f4fff8 (Base)
  - mint_cream-100 to mint_cream-900: Ranging from darkest (#006425) to lightest (#fdfffe)

**Cadet Gray (Light Blue-Gray)**
- Used for accents, highlights, and subtle UI elements
- Variants:
  - cadet_gray-DEFAULT: #8baaad (Base)
  - cadet_gray-100 to cadet_gray-900: Ranging from darkest (#1a2424) to lightest (#e8eeee)

### Functional Colors

- **Background**: mint_cream-500 (light) / night-500 (dark)
- **Foreground/Text**: davys_gray-500 (light) / mint_cream-500 (dark)
- **Primary Action**: night-600 to night-800
- **Secondary Action**: gunmetal-500 to gunmetal-700
- **Accent**: cadet_gray-400 to cadet_gray-600
- **Success**: night-700
- **Error**: #e53e3e (red-600)
- **Warning**: #dd6b20 (orange-600)
- **Info**: cadet_gray-600

### Color Usage Guidelines

1. **Text Contrast**
   - Ensure text has sufficient contrast against backgrounds (WCAG AA minimum)
   - Use darker colors on light backgrounds and lighter colors on dark backgrounds

2. **Color Hierarchy**
   - Use primary colors for main actions and important UI elements
   - Use secondary colors for supporting elements and accents
   - Use neutral colors for text, backgrounds, and subtle UI elements

3. **Dark Mode**
   - Invert color scheme appropriately for dark mode
   - Ensure sufficient contrast in both light and dark modes

## Typography

### Font Families

- **Primary Font**: Geist Sans (variable font)
  - Used for most text content, headings, and UI elements
  - Implementation: `font-[family-name:var(--font-geist-sans)]`

- **Monospace Font**: Geist Mono (variable font)
  - Used for code snippets, technical content, and special UI elements
  - Implementation: `font-[family-name:var(--font-geist-mono)]`

### Type Scale

- **Heading 1**: 2.5rem (40px), font-weight: 700
- **Heading 2**: 2rem (32px), font-weight: 700
- **Heading 3**: 1.75rem (28px), font-weight: 600
- **Heading 4**: 1.5rem (24px), font-weight: 600
- **Heading 5**: 1.25rem (20px), font-weight: 600
- **Heading 6**: 1rem (16px), font-weight: 600
- **Body Large**: 1.125rem (18px), font-weight: 400
- **Body**: 1rem (16px), font-weight: 400
- **Body Small**: 0.875rem (14px), font-weight: 400
- **Caption**: 0.75rem (12px), font-weight: 400

### Typography Usage Guidelines

1. **Hierarchy**
   - Use appropriate heading levels for content hierarchy
   - Maintain consistent heading styles throughout the site

2. **Readability**
   - Ensure line heights are appropriate for readability (1.5-1.7 for body text)
   - Maintain appropriate font sizes for different screen sizes
   - Limit line length to 60-80 characters for optimal readability

3. **Responsive Typography**
   - Scale typography appropriately for different screen sizes
   - Use relative units (rem) for font sizes to respect user preferences

## Spacing System

Based on a 4px grid system, with the following spacing values:

- **0**: 0px
- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **5**: 1.25rem (20px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **10**: 2.5rem (40px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)
- **24**: 6rem (96px)
- **32**: 8rem (128px)

### Spacing Usage Guidelines

1. **Consistency**
   - Use consistent spacing values throughout the interface
   - Maintain vertical rhythm with consistent spacing between elements

2. **Hierarchy**
   - Use larger spacing to separate distinct sections
   - Use smaller spacing for related elements

3. **Responsive Spacing**
   - Adjust spacing for different screen sizes
   - Use smaller spacing on mobile devices

## Component Styling

### Buttons

**Primary Button**
- Background: night-600
- Text: mint_cream-500
- Hover: night-700
- Active: night-800
- Border: none
- Border Radius: rounded-full (9999px)
- Padding: px-5 py-3 (1.25rem horizontal, 0.75rem vertical)

**Secondary Button**
- Background: gunmetal-500
- Text: mint_cream-500
- Hover: gunmetal-600
- Active: gunmetal-700
- Border: none
- Border Radius: rounded-full (9999px)
- Padding: px-5 py-3 (1.25rem horizontal, 0.75rem vertical)

**Outline Button**
- Background: transparent
- Text: night-600 (light) / mint_cream-500 (dark)
- Border: 1px solid night-600 (light) / mint_cream-500 (dark)
- Hover: bg-night-600/10 (light) / bg-mint_cream-500/10 (dark)
- Border Radius: rounded-full (9999px)
- Padding: px-5 py-3 (1.25rem horizontal, 0.75rem vertical)

**Text Button**
- Background: transparent
- Text: night-600 (light) / mint_cream-500 (dark)
- Hover: bg-night-600/10 (light) / bg-mint_cream-500/10 (dark)
- Padding: px-3 py-2 (0.75rem horizontal, 0.5rem vertical)

### Cards

**Standard Card**
- Background: mint_cream-500 (light) / gunmetal-400 (dark)
- Border: 1px solid cadet_gray-200 (light) / cadet_gray-700 (dark)
- Border Radius: rounded-lg (0.5rem)
- Shadow: shadow-sm
- Padding: p-6 (1.5rem)

**Elevated Card**
- Background: mint_cream-500 (light) / gunmetal-400 (dark)
- Border: none
- Border Radius: rounded-lg (0.5rem)
- Shadow: shadow-md
- Padding: p-6 (1.5rem)

### Form Elements

**Input Field**
- Background: mint_cream-500 (light) / gunmetal-300 (dark)
- Border: 1px solid cadet_gray-300 (light) / cadet_gray-600 (dark)
- Border Radius: rounded-md (0.375rem)
- Focus: border-night-600 ring-1 ring-night-600 (light) / border-mint_cream-400 ring-1 ring-mint_cream-400 (dark)
- Padding: px-4 py-2 (1rem horizontal, 0.5rem vertical)

**Checkbox/Radio**
- Border: 1px solid cadet_gray-400
- Border Radius: rounded (checkbox), rounded-full (radio)
- Checked Background: night-600
- Focus: ring-2 ring-night-600/50

### Navbar (Frosted Glass)

**Light Mode**
- Background: bg-mint_cream-500/70
- Backdrop Filter: backdrop-blur-md
- Border Bottom: border-b border-cadet_gray-200/10
- Text: text-davys_gray-500
- Active/Hover: text-night-600

**Dark Mode**
- Background: bg-gunmetal-500/70
- Backdrop Filter: backdrop-blur-md
- Border Bottom: border-b border-cadet_gray-700/10
- Text: text-mint_cream-500
- Active/Hover: text-night-700

## Responsive Breakpoints

- **sm**: 640px (Small devices)
- **md**: 768px (Medium devices)
- **lg**: 1024px (Large devices)
- **xl**: 1280px (Extra large devices)
- **2xl**: 1536px (2X large devices)

## Accessibility Guidelines

1. **Color Contrast**
   - Ensure text has a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text
   - Test color combinations for sufficient contrast

2. **Focus States**
   - Provide visible focus indicators for all interactive elements
   - Use consistent focus styles throughout the interface

3. **Text Alternatives**
   - Provide alt text for all images
   - Use aria-label for interactive elements without visible text

4. **Keyboard Navigation**
   - Ensure all interactive elements are keyboard accessible
   - Maintain a logical tab order

5. **Semantic HTML**
   - Use appropriate HTML elements for their intended purpose
   - Use heading levels to create a logical document outline