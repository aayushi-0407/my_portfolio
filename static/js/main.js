// static/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced Skills Carousel Animation
    const skillCarousel = document.querySelector('.skill-carousel');
    if (skillCarousel) {
        const skillSlides = skillCarousel.querySelectorAll('.skill-slide');
        
        // Clone slides for seamless loop
        skillSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            skillCarousel.appendChild(clone);
        });

        // Pause animation on hover
        skillCarousel.addEventListener('mouseenter', () => {
            skillCarousel.style.animationPlayState = 'paused';
        });

        skillCarousel.addEventListener('mouseleave', () => {
            skillCarousel.style.animationPlayState = 'running';
        });

        // Add fade-in effect when skills section is visible
        const skillsSection = document.querySelector('.skills');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    skillsSection.classList.add('skills-visible');
                }
            });
        }, { threshold: 0.3 });

        observer.observe(skillsSection);
    }
});

// Add enhanced CSS animations
const style = document.createElement('style');
style.textContent = `
    .skills-visible .skill-slide {
        animation: skillFadeIn 0.6s ease-out forwards;
        opacity: 0;
    }

    @keyframes skillFadeIn {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .skill-carousel:hover .skill-slide {
        animation-play-state: paused;
    }
`;
document.head.appendChild(style);