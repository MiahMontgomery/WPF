// Parallax scrolling effect for hero section
function initParallax() {
    const parallaxBg = document.querySelector('.parallax-bg');

    if (parallaxBg) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            parallaxBg.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
});

// Highlight active navigation item on scroll
window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.navbar-nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Handle navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
});

// Close navbar when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar-collapse');
    const toggler = document.querySelector('.navbar-toggler');

    if (navbar && toggler && event.target) {
        const isClickInsideNavbar = navbar.contains(event.target);
        const isClickOnToggler = toggler.contains(event.target);

        if (!isClickInsideNavbar && !isClickOnToggler && navbar.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbar);
            bsCollapse.hide();
        }
    }
});


// Form validation
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        if (!contactForm.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        }
        contactForm.classList.add('was-validated');
    });
}

// Initialize AOS (Animate on Scroll) if available
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true
    });
}


// Initialize parallax effect on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
    initParallax();

    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }

            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        });
    });

    // Active navigation highlighting
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

        let current = '';
        const headerHeight = document.querySelector('header').offsetHeight;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 50;
            const sectionHeight = section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // Update active nav on scroll
    window.addEventListener('scroll', updateActiveNav);

    // Initial call
    updateActiveNav();

    // Add loading state to contact form
    const submitButton = document.querySelector('#contact form button[type="submit"]');
    if (submitButton) {
        const originalText = submitButton.innerHTML;

        submitButton.closest('form').addEventListener('submit', function() {
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Sending...';
            submitButton.disabled = true;

            // Re-enable after 3 seconds (in case of quick redirect)
            setTimeout(() => {
                submitButton.innerHTML = originalText;
                submitButton.disabled = false;
            }, 3000);
        });
    }

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all product cards and racing achievements
    const animatedElements = document.querySelectorAll('.product-card, .racing-achievement, .gallery-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});

// Utility function to close mobile menu
function closeMobileMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse);
        bsCollapse.hide();
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbar && navbarToggler && !navbar.contains(e.target) && !navbarToggler.contains(e.target)) {
        closeMobileMenu();
    }
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeMobileMenu();
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll event
const throttledScrollHandler = throttle(function() {
    // Additional scroll-based functionality can be added here
}, 100);

window.addEventListener('scroll', throttledScrollHandler);

// Image Lightbox Functionality
function openLightbox(imageSrc, caption) {
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');

    lightboxImage.src = imageSrc;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';

    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('imageLightbox');
    lightbox.style.display = 'none';

    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Close lightbox on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
});