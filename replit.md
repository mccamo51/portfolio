# Portfolio Website - Aakash Rajbanshi

## Overview

This is a modern portfolio website built for Aakash Rajbanshi, a Flutter developer specializing in cross-platform mobile applications. The site features a dark-themed, two-column layout with a fixed sidebar for profile information and a main content area showcasing different sections including About, Resume, Portfolio, Blog, and Contact pages. The application follows a reference-based design approach with pixel-perfect accuracy to match provided design specifications.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and dark mode support
- **Component Library**: shadcn/ui components built on Radix UI primitives for accessible, customizable UI components
- **State Management**: React hooks (useState, useEffect) for local component state and React Query for server state management
- **Routing**: Single-page application with client-side tab navigation between portfolio sections

### Backend Architecture
- **Server**: Express.js with TypeScript for RESTful API endpoints
- **Database ORM**: Drizzle ORM for type-safe database interactions with PostgreSQL
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **File Structure**: Monorepo structure with shared schema definitions between client and server

### Data Storage
- **Primary Database**: PostgreSQL with Neon serverless hosting
- **Schema Management**: Drizzle migrations for version-controlled database changes
- **Development Storage**: In-memory storage implementation for development/testing

### UI/UX Design System
- **Theme**: Custom dark theme with neutral color palette and yellow/gold accent colors
- **Typography**: Inter font family with consistent heading hierarchy
- **Layout**: Two-column responsive layout with fixed sidebar and flexible main content area
- **Components**: Reusable component library following atomic design principles with proper TypeScript interfaces

### Development Tools
- **Build System**: Vite for fast development and optimized production builds
- **Code Quality**: TypeScript strict mode with comprehensive type checking
- **Hot Reload**: Vite HMR for efficient development workflow
- **Asset Management**: Static asset handling with proper path resolution

## External Dependencies

### Core Technologies
- **React Ecosystem**: @tanstack/react-query for server state, react-hook-form for form management
- **UI Components**: Comprehensive Radix UI component collection (@radix-ui/*) for accessible primitives
- **Styling**: Tailwind CSS with PostCSS for utility-first styling approach
- **Icons**: Lucide React for consistent iconography

### Database & Storage
- **Database**: @neondatabase/serverless for PostgreSQL hosting
- **ORM**: drizzle-orm with drizzle-zod for schema validation
- **Session Storage**: connect-pg-simple for persistent session management

### Development Environment
- **Replit Integration**: Custom Replit plugins for development banner and cartographer
- **Error Handling**: Runtime error overlay for development debugging
- **Build Tools**: esbuild for production server bundling

### Utility Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Styling Utilities**: clsx and class-variance-authority for conditional styling
- **Validation**: Zod schema validation integrated with form handling
- **Carousel**: embla-carousel-react for image/content carousels

### Third-Party Integrations
- **Maps**: Google Maps embedding for contact page location display
- **Fonts**: Google Fonts (Inter) for consistent typography
- **Image Optimization**: Placeholder images from Unsplash for portfolio projects