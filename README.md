# Williams Performance Friction - Static Website

A modern, responsive website for Williams Performance Friction, showcasing their revolutionary 100% recyclable brake pad technology and racing heritage.

## About

This is a fully static website built with HTML, CSS, and JavaScript. It features:
- Responsive design with Bootstrap 5
- Smooth scrolling and parallax effects
- Interactive image lightbox for the heritage timeline
- Instagram feed integration
- Contact form powered by Formspree

## Project Structure

```
/
├── index.html          # Main HTML file
├── static/             # Static assets
│   ├── css/           # Stylesheets
│   ├── js/            # JavaScript files
│   └── images/        # Images and graphics
└── vercel.json        # Vercel deployment configuration
```

## Deployment

### Deploy to Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Vercel will automatically detect it as a static site and deploy it
6. Your site will be live with a `.vercel.app` domain (you can add a custom domain later)

### Deploy to Netlify

1. Push this repository to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Leave build settings empty (it's already a static site)
6. Click "Deploy"

### Deploy to Cloudflare Pages

1. Push this repository to GitHub
2. Go to [pages.cloudflare.com](https://pages.cloudflare.com)
3. Click "Create a project"
4. Select your repository
5. Leave build settings empty
6. Click "Save and Deploy"

## Contact Form Setup

The contact form uses Formspree for handling submissions. To set it up:

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Open `index.html` and find the contact form (search for "YOUR_FORM_ID")
4. Replace `YOUR_FORM_ID` with your actual Formspree form ID
5. Commit and push the change

Example:
```html
<form method="POST" action="https://formspree.io/f/YOUR_FORM_ID">
```
becomes:
```html
<form method="POST" action="https://formspree.io/f/xyzabc123">
```

## Local Development

To view the site locally, simply open `index.html` in a web browser. For a better development experience with live reload:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **JavaScript (ES6+)** - Interactive features
- **Bootstrap 5** - Responsive framework
- **Font Awesome** - Icon library
- **Google Fonts** - Typography (Orbitron, Rajdhani, Inter, Bebas Neue)
- **SociableKit** - Instagram feed widget
- **Formspree** - Contact form handling

## Features

- **Responsive Design**: Works perfectly on all devices
- **Smooth Scrolling**: Navigate sections with smooth animations
- **Parallax Hero**: Eye-catching parallax effect on the hero section
- **Image Lightbox**: Click timeline images to view them in full size
- **Instagram Integration**: Live feed from @wpfri.ca
- **Contact Form**: Easy-to-use contact form with Formspree integration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Williams Performance Friction. All rights reserved.
