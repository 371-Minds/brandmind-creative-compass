# BrandMind - Intelligent Template System

## Overview

BrandMind is a modern web application that provides intelligent template management with brand compliance checking and role-based permissions. It's designed as an Adobe Express add-on that enables teams to maintain brand integrity while allowing creative freedom through smart template systems.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state, React hooks for local state
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript throughout the stack
- **API Design**: RESTful API with `/api` prefix routing
- **Development**: Hot module replacement via Vite middleware

### Data Storage Solutions
- **Database**: PostgreSQL with Neon serverless hosting
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Shared schema definitions between client and server
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Template Editor System
- **Zone-based editing**: Templates divided into locked, editable, and controlled zones
- **Real-time validation**: Live brand compliance checking during editing
- **Role-based permissions**: Different editing capabilities based on user roles
- **Drag-and-drop interface**: Interactive template manipulation

### Brand Compliance Engine
- **Asset management**: Centralized brand asset library with approval workflows
- **Color validation**: Automatic checking against approved brand palettes
- **Typography enforcement**: Font usage validation and restrictions
- **Layout guidelines**: Spacing and positioning compliance checking

### Permission Management
- **Role hierarchy**: Brand Manager > Editor > Contributor > Viewer
- **Granular controls**: Per-zone and per-action permission settings
- **Team collaboration**: Multi-user editing with access controls

### Analytics Dashboard
- **Usage tracking**: Template usage and engagement metrics
- **Compliance monitoring**: Brand guideline adherence reporting
- **Performance insights**: Creation efficiency and workflow analytics

## Data Flow

1. **User Authentication**: Users log in and receive role-based permissions
2. **Template Loading**: Templates fetched with zone configurations and user permissions
3. **Real-time Editing**: Changes validated against brand rules in real-time
4. **Compliance Checking**: Automatic validation of colors, fonts, layouts, and assets
5. **Approval Workflows**: Brand managers review and approve template changes
6. **Analytics Collection**: Usage data collected for reporting and optimization

## External Dependencies

### Adobe Integration
- **Creative SDK**: Integration with Adobe Express for seamless add-on experience
- **Document Events**: Real-time editing event handling
- **Color Picker**: Brand-restricted color selection interface

### UI Libraries
- **Radix UI**: Accessible component primitives
- **Lucide React**: Icon library
- **Recharts**: Data visualization components
- **Date-fns**: Date manipulation utilities

### Database & Backend
- **Neon Database**: Serverless PostgreSQL hosting
- **Connect PG Simple**: PostgreSQL session store
- **Drizzle ORM**: Type-safe database operations

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with HMR
- **Database**: Remote Neon PostgreSQL instance
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Client**: Vite build process creating optimized static assets
- **Server**: ESBuild bundling Express server for Node.js deployment
- **Database Migrations**: Drizzle Kit push commands for schema updates

### Replit Integration
- **Runtime Error Handling**: Custom error overlay for development
- **Cartographer Plugin**: Enhanced debugging in Replit environment
- **Asset Management**: Attached assets support for media files

The application follows a modern full-stack TypeScript architecture with emphasis on type safety, developer experience, and scalable brand management workflows. The Adobe Creative SDK integration provides seamless embedding within Adobe Express while maintaining standalone functionality.