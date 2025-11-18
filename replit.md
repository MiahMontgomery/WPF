# Overview

Williams Performance Friction is a professional automotive brake pad company website built as a fully static site (HTML/CSS/JavaScript). The site showcases the company's specialty in manufacturing 100% recyclable brake pads and their racing heritage. The application features a single-page design with a black background, red highlights, and white text, emphasizing a high-performance automotive aesthetic. The site includes sections for company information, products, racing heritage, Instagram feed integration, and a contact form powered by Formspree.

## Recent Updates (November 2025)

- **Converted to Static Site**: Removed Flask backend and converted to pure static HTML/CSS/JS for deployment on Vercel, Netlify, or Cloudflare Pages
- **Formspree Integration**: Contact form now uses Formspree for static form handling (placeholder URL - needs user configuration)
- **Expanded Heritage Timeline**: Comprehensive past/present/future timeline now includes 7 milestones (2002-2025+) including the 2004 CASC-OR Championship title sponsorship
- **Instagram Feed Integration**: Added dedicated section for live Instagram feed (@wpfri.ca) using free SociableKit widget to showcase video content
- **Black Race Car Photo**: Added Williams Performance Friction branded race car image to 2004 timeline entry

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Single-page application** with smooth scrolling navigation between sections
- **Responsive design** using Bootstrap 5 framework for mobile and desktop compatibility
- **Fixed navigation bar** at the top with hamburger menu for mobile devices
- **Custom CSS** with CSS variables for consistent color theming (black, white, red color scheme)
- **JavaScript-enhanced UX** with smooth scrolling and active navigation highlighting

## Static Site Structure
- **Pure HTML/CSS/JavaScript** - No server-side processing required
- **Single index.html** file at the root with all content
- **Static asset organization** with separate directories for CSS, JavaScript, and images
- **Formspree integration** for contact form submissions without backend
- **Client-side form validation** using HTML5 and JavaScript
- **Optimized for static hosting** on Vercel, Netlify, or Cloudflare Pages

# External Dependencies

## Frontend Libraries
- **Bootstrap 5.3.0** - CSS framework for responsive design and components
- **Font Awesome 6.4.0** - Icon library for UI elements
- **Google Fonts** - Orbitron (headings, matching logo), Inter (body text), Bebas Neue (buttons), Rajdhani Bold Extended Italic (navigation)
- **SociableKit** - Free Instagram feed widget integration (setup required by user)
- **Formspree** - Static form handling service for contact submissions

## Deployment Configuration
- **Static hosting** - Optimized for Vercel, Netlify, or Cloudflare Pages
- **No build step required** - Deploy directly from repository
- **Formspree configuration** - User must replace placeholder form ID with their own
- **Custom domain support** - Configure via static hosting platform
- **Social Media Integration** - Instagram (@wpfri.ca) and YouTube channels linked throughout site