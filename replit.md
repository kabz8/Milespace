# Milespace Agency Website

## Overview

Milespace is a premium software development agency website built as a modern full-stack application. The project showcases the agency's portfolio, services, and pricing packages while providing contact and consultation booking capabilities. Built with a focus on clean design aesthetics inspired by modern development agencies like Vercel and Linear, the application emphasizes bold typography, sophisticated project showcases, and seamless user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React with TypeScript**: Component-based UI using functional components and hooks
- **Vite**: Fast build tool and development server with HMR (Hot Module Replacement)
- **Wouter**: Lightweight client-side routing library for navigation
- **TanStack Query (React Query)**: Server state management, data fetching, and caching

**UI Component System**
- **shadcn/ui**: Comprehensive component library built on Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **Class Variance Authority (CVA)**: Type-safe variant management for components
- **Design tokens**: Custom color system with HSL variables supporting light/dark themes

**State Management Approach**
- Server state managed via TanStack Query with background refetching disabled
- Local UI state managed via React hooks (useState, useContext)
- Theme state persisted to localStorage via custom ThemeProvider context
- Form state handled by react-hook-form with Zod validation

**Key Design Decisions**
- **New York style**: shadcn/ui configuration using the "new-york" aesthetic variant
- **Typography**: Space Grotesk for display headings, Inter for body text (loaded via Google Fonts)
- **Responsive design**: Mobile-first approach with breakpoint-based layouts
- **Path aliases**: Configured for clean imports (@/, @shared/, @assets/)

### Backend Architecture

**Server Framework**
- **Express.js**: Node.js web application framework handling HTTP requests
- **TypeScript**: Type-safe server implementation with ESM modules
- **Custom Vite integration**: Development mode serves frontend through Vite middleware

**API Design Pattern**
- RESTful API endpoints under `/api/*` namespace
- JSON request/response format
- Centralized error handling with try-catch blocks
- Request logging middleware capturing method, path, status, duration, and response previews

**Data Layer**
- **In-memory storage**: MemStorage class implementing IStorage interface for development
- **Drizzle ORM**: Configured for PostgreSQL with schema definitions in shared folder
- **Schema-first approach**: Zod schemas define data validation and TypeScript types

**Storage Interface Design**
The IStorage interface defines a contract for data operations:
- Projects: CRUD operations for portfolio items
- Contact submissions: Store and retrieve contact form data
- Shareable pricing links: Generate trackable links with view counters

**Alternative considered**: Direct database implementation was configured but memory storage provides faster development iteration without database dependencies.

### Data Schema Design

**Shared Schema Pattern**
All data types are defined in `shared/schema.ts` using Zod, providing:
- Runtime validation
- TypeScript type inference
- Frontend/backend consistency
- Automatic type safety

**Key Schemas**
- `projectSchema`: Portfolio projects with categories, tags, featured flag
- `contactFormSchema`: Contact form validation with service interest enum
- `pricingPackageSchema`: Service packages with features and pricing tiers
- `shareablePricingLinkSchema`: Trackable links with view counts and expiration

### Routing Strategy

**Client-side Routing**
- Wouter provides lightweight routing without react-router overhead
- Route definitions centralized in App.tsx
- Nested routes supported (e.g., `/pricing/:packageId`, `/pricing/share/:linkId`)
- 404 fallback via NotFound component

**Server-side Routing**
- Express handles API routes in `server/routes.ts`
- Static file serving for production builds
- Vite middleware integration for development

### Build & Deployment Configuration

**Development Mode**
- `npm run dev`: Runs TypeScript server with tsx, enabling Vite middleware
- Replit-specific plugins for runtime error overlay and dev banner
- File system access restricted for security

**Production Build**
- `npm run build`: 
  - Vite builds React frontend to `dist/public`
  - esbuild bundles server code to `dist/index.js` as ESM
- `npm start`: Runs production server from dist folder

**TypeScript Configuration**
- Strict mode enabled for maximum type safety
- ESNext module system with bundler resolution
- Incremental compilation for faster builds
- Separate tsconfig for client, server, and shared code

### Form Handling Architecture

**Validation Strategy**
- react-hook-form manages form state and submission
- @hookform/resolvers integrates Zod schemas for validation
- Real-time validation feedback via FormMessage components
- Server-side validation repeats Zod checks for security

**Contact Form Flow**
1. User fills form with react-hook-form controlled inputs
2. Client-side Zod validation prevents invalid submission
3. TanStack Query mutation posts to `/api/contact`
4. Server validates again and stores submission
5. Success toast notification confirms submission

### Theme System

**Design Token Architecture**
- CSS custom properties defined in `:root` and `.dark` scopes
- HSL color format enables alpha channel manipulation
- Semantic naming (primary, secondary, muted, accent, destructive)
- Component-specific tokens (card-border, popover-border, etc.)

**Theme Toggle Implementation**
- Custom ThemeProvider context wraps entire application
- localStorage persists user preference
- documentElement class toggles between light/dark
- Immediate visual feedback without flash of unstyled content

**Pro**: Allows complete control over theme values and switching logic
**Con**: Requires manual maintenance compared to CSS-in-JS solutions

## External Dependencies

### UI Component Libraries
- **Radix UI**: Unstyled, accessible component primitives (20+ components including Dialog, Dropdown, Accordion, etc.)
- **Lucide React**: Icon library for consistent iconography
- **embla-carousel-react**: Touch-friendly carousel component
- **cmdk**: Command palette component for keyboard-driven interfaces

### Data Fetching & Validation
- **TanStack Query v5**: Async state management with caching, prefetching, and optimistic updates
- **Zod**: TypeScript-first schema validation library
- **drizzle-zod**: Automatic Zod schema generation from Drizzle ORM schemas

### Form Handling
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Validation resolver integration layer

### Styling & Utilities
- **Tailwind CSS**: Utility-first CSS with PostCSS processing
- **class-variance-authority**: Variant-based component styling
- **clsx & tailwind-merge**: Conditional class name composition

### Database & ORM
- **Drizzle ORM**: TypeScript ORM configured for PostgreSQL
- **@neondatabase/serverless**: Serverless PostgreSQL driver (configured but not actively used)
- **drizzle-kit**: CLI tools for migrations and schema pushing

### Development Tools
- **Vite**: Frontend build tool and dev server
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution engine for development
- **@replit/vite-plugin-***: Replit-specific development enhancements

### Session Management
- **connect-pg-simple**: PostgreSQL session store (configured for future authentication features)

### Date Handling
- **date-fns**: Modern JavaScript date utility library

### Build Considerations
The application is configured for deployment on Replit but can be adapted for other platforms by:
- Removing Replit-specific Vite plugins
- Configuring alternative PostgreSQL connection
- Adjusting build output paths in vite.config.ts