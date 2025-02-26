# Talty Digital LLC Website - System Patterns

This document outlines the architectural patterns, coding standards, and design principles to be followed throughout the project.

## Architecture Patterns

### Project Structure
- Organize the project into separate directories for frontend and backend:
  - `frontend/`: Next.js application
  - `functions/`: Cloud functions
- Use the App Router pattern for routing and layouts in the frontend
- Implement server components where appropriate for improved performance
- Utilize client components for interactive elements
- Follow the recommended folder structure:
  ```
  frontend/
    app/
      layout.tsx       # Root layout
      page.tsx         # Home page
      globals.css      # Global styles
      services/        # Service pages
        layout.tsx     # Services layout
        page.tsx       # Services index
        [service]/     # Dynamic service pages
          page.tsx     # Individual service page
      blog/            # Blog section
        layout.tsx     # Blog layout
        page.tsx       # Blog index
        [slug]/        # Dynamic blog posts
          page.tsx     # Individual blog post
  functions/
    # Cloud functions for backend processing
  ```

### Component Architecture
- Implement a component-driven architecture
- Organize components by domain and function
- Use atomic design principles:
  - **Atoms**: Basic UI elements (buttons, inputs, icons)
  - **Molecules**: Groups of atoms (form fields, cards)
  - **Organisms**: Complex UI sections (headers, footers, feature sections)
  - **Templates**: Page layouts without specific content
  - **Pages**: Complete pages with actual content
- See detailed component structure in `memory-bank/homepageComponents.md`

### Directory Structure
- Organize code following the structure outlined in `memory-bank/directoryStructure.md`
- Group components by atomic design categories
- Keep related files together
- Maintain clear separation of concerns

## Design System

### Color Palette
- Use the color palette defined in tailwind.config.ts
- Primary colors: night (dark green/black), gunmetal (dark teal)
- Secondary colors: davys_gray (medium gray), mint_cream (very light green/white), cadet_gray (light blue-gray)
- Apply colors consistently according to `memory-bank/designSystem.md`

### Typography
- Use Geist Sans as the primary font family
- Use Geist Mono for code and technical content
- Follow the type scale defined in `memory-bank/designSystem.md`
- Maintain consistent text styles across the site

### Spacing
- Use the 4px grid system for spacing
- Apply consistent spacing between elements
- Adjust spacing responsively for different screen sizes

### UI Components
- Implement consistent styling for buttons, cards, and form elements
- Follow the component styling guidelines in `memory-bank/designSystem.md`
- Ensure components are accessible and responsive

## Coding Standards

### TypeScript
- Use TypeScript for all components and functions
- Define explicit types for props, state, and function parameters
- Avoid using `any` type
- Use interfaces for object shapes and types for unions/primitives

### Component Structure
- One component per file
- Use named exports for components
- Implement proper prop validation
- Follow consistent naming conventions:
  - PascalCase for component files and component names
  - camelCase for functions and variables
  - kebab-case for CSS classes

### CSS/Styling
- Use Tailwind CSS for styling
- Create consistent design tokens for colors, spacing, typography
- Implement responsive design using Tailwind's breakpoint system
- Extract common patterns into reusable components
- Implement frosted glass effect for navbar using backdrop-filter

## State Management
- Use React's built-in state management (useState, useContext) for simple state
- Evaluate need for additional state management libraries based on complexity
- Keep state as close as possible to where it's used
- Implement proper data fetching strategies using Next.js data fetching methods

## Performance Patterns
- Implement code splitting and lazy loading
- Optimize images using Next.js Image component
- Minimize client-side JavaScript
- Use server components where possible
- Implement proper caching strategies

## Accessibility Standards
- Follow WCAG 2.1 AA standards
- Implement proper semantic HTML
- Ensure keyboard navigation works properly
- Maintain appropriate color contrast
- Provide alternative text for images
- Test with screen readers

## Testing Strategy
- Implement unit tests for components and utilities
- Add integration tests for key user flows
- Consider end-to-end tests for critical paths
- Aim for meaningful test coverage rather than arbitrary percentages

## Documentation Standards
- Document all components with clear descriptions and usage examples
- Maintain up-to-date API documentation
- Document key architectural decisions in decisionLog.md
- Update progress.md with completed work and next steps
- Reference detailed documentation in memory-bank directory