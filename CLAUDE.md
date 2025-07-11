# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js animation showcase project built with TypeScript, focusing on interactive animations and responsive design. The project demonstrates complex animations using Framer Motion and Embla carousel components with custom styling.

## Development Commands

- `npm run dev --turbopack` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Architecture & Structure

### Core Technologies
- **Next.js 15** with App Router
- **TypeScript** with strict mode enabled
- **Tailwind CSS 4** with custom theme variables
- **Framer Motion** for complex animations
- **Embla Carousel** for responsive carousels
- **shadcn/ui** component system configured

### Component Architecture

The project follows a modular component structure:

- `components/hero/` - Main landing page components with complex animations
  - `TitleAnimation.tsx` - Responsive animated title with viewport-specific layouts (mobile, tablet, desktop)
  - `ChanginColorText.tsx` - Text with color transition animations
  - `TextCarousel.tsx` - Animated text carousel component
  - `Card.tsx` - Business card component with barcode generation
  - `CustomButton.tsx` - Styled interactive button

- `components/carousel/` - Carousel components with Framer Motion integration
  - `EmblaCarouselWithFramer.tsx` - Main carousel with viewport detection and adaptive orientation
  - Animation states: inactive, active, transitioning with custom easing

### Styling System

- **Custom CSS variables** defined in `app/globals.css` with green color palette
- **Custom animations**: `slideLeft`, `shrinkWidth`, `colorTransition` with transform effects
- **Custom font**: Soehne loaded via font-face
- **Responsive breakpoints**: Mobile-first with tablet and desktop variations

### Key Features

1. **Viewport-Responsive Layout**: Components adapt between mobile (4-line), tablet (3-line), and desktop (2-line) layouts
2. **Dynamic Carousel Orientation**: Vertical scrolling on tablets (641-1024px), horizontal elsewhere
3. **Complex Animation States**: Framer Motion variants with staggered transitions
4. **Custom Theme System**: CSS variables integrated with Tailwind configuration

### Development Notes

- Uses `@/*` path aliases configured in tsconfig.json
- Embla carousel configured with autoplay (5s delay, no interaction stop)
- Custom barcode generation in Card components
- Screen size indicator component for development debugging
- Responsive image handling with Next.js Image component

### Component Patterns

When creating new animated components:
- Use Framer Motion variants for state management
- Implement viewport detection hooks for responsive behavior
- Follow the established green color palette from CSS variables
- Use clsx/tailwind-merge utility for conditional styling
- Consider mobile-first responsive design patterns