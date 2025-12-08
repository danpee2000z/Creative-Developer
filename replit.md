# Creative Developer Portfolio

## Overview

This is a modern, minimalist portfolio website for a creative developer based in Nigeria. The application showcases web development, mobile app, and graphics/AI design services through a clean, typography-first interface inspired by design systems like Linear, Stripe, and Apple.

The portfolio is built as a full-stack application with a React frontend using shadcn/ui components and an Express backend, designed to be deployed on Replit with PostgreSQL database support.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript and Vite for build tooling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens for a minimalist aesthetic
- **Design System**: "New York" variant of shadcn/ui with neutral base colors and custom spacing units

**Key Design Decisions**:
- Typography-first approach using Inter font family via Google Fonts
- Generous whitespace and restrained decoration following the design guidelines
- Responsive grid layouts optimized for desktop (3 columns) and mobile (1-2 columns)
- Component composition pattern using Radix UI for accessibility and customization

### Backend Architecture

**Framework**: Express.js with TypeScript running on Node.js
- **Server Setup**: HTTP server with middleware for JSON parsing and request logging
- **Storage Layer**: Abstracted storage interface (`IStorage`) with in-memory implementation (`MemStorage`)
- **API Design**: RESTful endpoints prefixed with `/api`
- **Session Management**: Prepared for session handling with environment-based configuration

**Key Design Decisions**:
- Clean separation between route definitions, storage, and server setup
- Custom logging middleware for request/response tracking
- Static file serving for production builds
- Development mode with Vite HMR integration for fast refresh

### Data Storage

**ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Definition**: Type-safe schema definitions in `shared/schema.ts`
- **Migrations**: Drizzle Kit for database migrations in `./migrations` directory
- **Validation**: Zod schemas derived from Drizzle schemas for runtime validation

**Current Schema**:
- Users table with UUID primary keys, unique usernames, and password storage
- Schema shared between client and server for type safety

**Key Design Decisions**:
- Schema-first approach with Drizzle for type safety across the stack
- Placeholder user authentication structure ready for expansion
- Environment variable configuration for database connection strings

### Build and Deployment

**Build Process**: Custom build script (`script/build.ts`) using esbuild and Vite
- Client build: Vite bundles React application to `dist/public`
- Server build: esbuild bundles Express server to single `dist/index.cjs` file
- Selective bundling of server dependencies to optimize cold start times

**Development Mode**: 
- Vite dev server with HMR via custom middleware
- Express server proxies to Vite for asset serving
- Hot reload for both client and server code

**Key Design Decisions**:
- Monorepo structure with shared types between client and server
- Path aliases for clean imports (`@/`, `@shared/`, `@assets/`)
- Production build creates standalone distributable with bundled dependencies

## External Dependencies

### UI Component Libraries
- **@radix-ui/**: Complete suite of unstyled, accessible UI primitives (accordion, dialog, dropdown, select, etc.)
- **shadcn/ui**: Pre-styled component system built on Radix UI with Tailwind CSS
- **lucide-react**: Icon library for consistent iconography
- **class-variance-authority**: CVA for component variant styling
- **tailwind-merge**: Utility for merging Tailwind CSS classes without conflicts

### Data and API Layer
- **@tanstack/react-query**: Async state management and data fetching
- **wouter**: Lightweight routing library for React (4KB alternative to React Router)
- **drizzle-orm**: Type-safe ORM for PostgreSQL
- **drizzle-kit**: CLI tool for schema migrations
- **zod**: Runtime type validation and schema definition

### Backend Services
- **express**: Web application framework
- **pg**: PostgreSQL client for Node.js (via Drizzle)
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **express-session**: Session middleware (configured but not yet implemented in routes)

### Development Tools
- **vite**: Build tool and dev server with fast HMR
- **esbuild**: Fast JavaScript bundler for server code
- **tsx**: TypeScript execution engine for development
- **@replit/vite-plugin-***: Replit-specific plugins for error overlay, dev banner, and cartographer

### Form Handling
- **react-hook-form**: Performant form state management
- **@hookform/resolvers**: Validation resolver for integrating Zod with React Hook Form

### Design and Styling
- **tailwindcss**: Utility-first CSS framework
- **postcss**: CSS transformation tool
- **autoprefixer**: PostCSS plugin for vendor prefixes
- **Google Fonts**: Inter font family for typography

### Database
- **PostgreSQL**: Primary relational database (configured via `DATABASE_URL` environment variable)
- Database provisioning required before running `db:push` command