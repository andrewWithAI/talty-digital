# Talty Digital LLC Website - Homepage Component Architecture

This document outlines the component architecture for the homepage, following atomic design principles and implementing a frosted glass navbar effect.

## Component Structure

### Atoms

**1. Logo**
- Purpose: Display company logo
- Props: size, variant (light/dark)
- Location: components/atoms/Logo.tsx

**2. Button**
- Purpose: Interactive element for calls-to-action
- Variants: primary, secondary, outline, text
- Props: variant, size, label, onClick, icon (optional)
- Location: components/atoms/Button.tsx

**3. Typography**
- Purpose: Consistent text styling
- Variants: heading (h1-h6), paragraph, caption
- Props: variant, weight, color, alignment
- Location: components/atoms/Typography.tsx

**4. Input**
- Purpose: Form input fields
- Variants: text, email, textarea
- Props: type, label, placeholder, value, onChange, error
- Location: components/atoms/Input.tsx

**5. Icon**
- Purpose: Visual indicators and decorations
- Props: name, size, color
- Location: components/atoms/Icon.tsx

### Molecules

**1. NavItem**
- Purpose: Navigation link with optional dropdown
- Components: Link, Icon (optional)
- Props: label, href, dropdown (optional)
- Location: components/molecules/NavItem.tsx

**2. ServiceCard**
- Purpose: Display service information
- Components: Icon, Typography, Button
- Props: title, description, icon, link
- Location: components/molecules/ServiceCard.tsx

**3. FormField**
- Purpose: Input with label and error handling
- Components: Input, Typography
- Props: label, type, placeholder, value, onChange, error
- Location: components/molecules/FormField.tsx

**4. SocialLinks**
- Purpose: Group of social media links
- Components: Icon, Link
- Props: platforms (array of social platforms)
- Location: components/molecules/SocialLinks.tsx

### Organisms

**1. Navbar**
- Purpose: Site navigation with frosted glass effect
- Components: Logo, NavItem, Button, MobileMenu
- Props: navItems, ctaButton
- Features:
  - Frosted glass effect using backdrop-filter
  - Responsive design with mobile menu
  - Color scheme adaptation for light/dark mode
- Location: components/organisms/Navbar.tsx

**2. HeroSection**
- Purpose: Main banner with company introduction
- Components: Typography, Button
- Props: title, subtitle, ctaText, ctaLink, backgroundImage
- Location: components/organisms/HeroSection.tsx

**3. ServicesOverview**
- Purpose: Display key services offered
- Components: Typography, ServiceCard
- Props: title, description, services (array)
- Location: components/organisms/ServicesOverview.tsx

**4. ContactForm**
- Purpose: Allow visitors to send messages
- Components: Typography, FormField, Button
- Props: title, description, onSubmit
- Location: components/organisms/ContactForm.tsx

**5. Footer**
- Purpose: Site footer with links and information
- Components: Logo, Typography, NavItem, SocialLinks
- Props: navItems, socialLinks, companyInfo
- Location: components/organisms/Footer.tsx

## Page Template

**Homepage Template**
- Purpose: Layout structure for homepage
- Components: Navbar, HeroSection, ServicesOverview, ContactForm, Footer
- Location: app/page.tsx

## Styling Implementation

### Frosted Glass Navbar

The frosted glass effect will be implemented using Tailwind CSS:

```tsx
// Navbar.tsx
<header className="fixed top-0 w-full z-50 
                  bg-mint_cream/70 dark:bg-gunmetal/70
                  backdrop-blur-md
                  border-b border-mint_cream/10 dark:border-cadet_gray/10
                  transition-all duration-200">
  {/* Navbar content */}
</header>
```

### Color Scheme Application

The color scheme will be applied consistently across components:

- **Primary Actions**: night-600 to night-800
- **Secondary Elements**: gunmetal-500 to gunmetal-700
- **Backgrounds**: mint_cream-500 (light) / night-500 (dark)
- **Text**: davys_gray-500 (light) / mint_cream-500 (dark)
- **Accents**: cadet_gray-400 to cadet_gray-600

## Responsive Design

The homepage will be fully responsive with these breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Key responsive considerations:
- Navbar transforms to hamburger menu on mobile
- Services grid adjusts columns based on viewport
- Typography scales appropriately for different devices
- Spacing and padding adjust for comfortable viewing

## Implementation Notes

1. All components should be implemented as TypeScript React components
2. Use Next.js server components where possible for improved performance
3. Client components should be used for interactive elements
4. Maintain accessibility standards throughout implementation
5. Implement proper SEO metadata in the page component