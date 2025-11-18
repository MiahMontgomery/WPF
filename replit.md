# Overview

Williams Performance Friction is a professional automotive brake pad company website built with Flask. The site showcases the company's specialty in manufacturing 100% recyclable brake pads and their racing heritage. The application features a single-page design with a black background, red highlights, and white text, emphasizing a high-performance automotive aesthetic. The site includes sections for company information, products, racing heritage, Instagram feed integration, and a contact form for customer inquiries.

## Recent Updates (November 2025)

- **Expanded Heritage Timeline**: Comprehensive past/present/future timeline now includes 7 milestones (2002-2025+) including the 2004 CASC-OR Championship title sponsorship
- **Instagram Feed Integration**: Added dedicated section for live Instagram feed (@wpfri.ca) using free EmbedSocial widget to showcase video content
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

## Backend Architecture
- **Flask web framework** as the core application server
- **SQLAlchemy ORM** with DeclarativeBase for database operations
- **Form handling** for contact submissions with server-side validation
- **Flash messaging system** for user feedback on form submissions
- **Environment-based configuration** for database URLs and secret keys
- **Production-ready middleware** with ProxyFix for proper header handling

## Database Design
- **SQLAlchemy models** defined separately in models.py for clean separation of concerns
- **ContactSubmission model** for storing customer inquiries with timestamp tracking
- **Flexible database backend** supporting both SQLite (development) and PostgreSQL (production)
- **Connection pooling** configured for production stability

## Application Structure
- **Modular design** with separate files for routes (app.py), models (models.py), and entry point (main.py)
- **Template-based rendering** using Jinja2 templates in the templates directory
- **Static asset organization** with separate directories for CSS, JavaScript, and images
- **Logging integration** for debugging and monitoring contact form submissions

# External Dependencies

## Frontend Libraries
- **Bootstrap 5.3.0** - CSS framework for responsive design and components
- **Font Awesome 6.4.0** - Icon library for UI elements
- **Google Fonts** - Orbitron (headings, matching logo), Inter (body text), Bebas Neue (buttons), Rajdhani Bold Extended Italic (navigation)
- **EmbedSocial** - Free Instagram feed widget integration (setup required by user)

## Backend Dependencies
- **Flask** - Python web framework for routing and templating
- **Flask-SQLAlchemy** - Database ORM integration
- **Werkzeug** - WSGI utilities including ProxyFix middleware

## Database
- **SQLite** - Default development database
- **PostgreSQL** - Production database (configured via DATABASE_URL environment variable)

## Deployment Configuration
- **Environment variables** for configuration management (SESSION_SECRET, DATABASE_URL)
- **Production middleware** for proxy handling in deployed environments
- **Database connection pooling** for production stability and performance
- **Vercel deployment** via GitHub integration with Namecheap domain
- **Social Media Integration** - Instagram (@wpfri.ca) and YouTube channels linked throughout site