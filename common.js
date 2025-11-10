// SwimPilot Common JavaScript - 3 Section Design

// Detect mobile devices
const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || window.innerWidth <= 768;
};

// Detect if device prefers reduced motion
const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Intersection Observer for core blocks
const coreBlocks = document.querySelectorAll('.core-block');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

coreBlocks.forEach(block => observer.observe(block));

// Create underwater light rays (radiating from top right 1/3 point)
function createLightRays() {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion()) return;

    const container = document.createElement('div');
    container.className = 'light-rays';

    // Add concentrated light source glow
    const sourceGlow = document.createElement('div');
    sourceGlow.className = 'light-source-glow';
    container.appendChild(sourceGlow);

    // Reduce ray count on mobile for better performance
    const rayCount = isMobile() ? 12 : 24;
    const spreadAngle = 100; // Total spread angle in degrees
    const spreadRadius = 40; // Smaller radius for tighter clustering

    for (let i = 0; i < rayCount; i++) {
        const ray = document.createElement('div');
        ray.className = 'light-ray';

        // Calculate angle for ray direction
        const angleStep = spreadAngle / (rayCount - 1);
        const angle = -spreadAngle / 2 + (i * angleStep);

        // Randomly offset starting position with tighter clustering
        const randomAngle = Math.random() * Math.PI * 2;
        const randomRadius = Math.random() * spreadRadius;
        const offsetX = Math.cos(randomAngle) * randomRadius;
        const offsetY = Math.sin(randomAngle) * randomRadius;

        ray.style.left = `calc(33.33% + ${offsetX}px)`;
        ray.style.top = `${offsetY}px`;

        ray.style.setProperty('--ray-angle', angle + 'deg');

        const duration = 5 + Math.random() * 4;
        const delay = -Math.random() * 6;

        ray.style.animation = `raySwim ${duration}s ease-in-out ${delay}s infinite`;

        container.appendChild(ray);
    }

    document.body.insertBefore(container, document.body.firstChild);
}

// Create floating particles
function createWaterParticles() {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion()) return;

    const container = document.createElement('div');
    container.className = 'water-particles';

    // Reduce particle count on mobile for better performance
    const particleCount = isMobile() ? 20 : 40;
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'water-particle';

        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';

        const floatX = (Math.random() - 0.5) * 100;
        const floatY = (Math.random() - 0.5) * 100;
        particle.style.setProperty('--float-x', floatX + 'px');
        particle.style.setProperty('--float-y', floatY + 'px');

        const duration = 8 + Math.random() * 8;
        const delay = -Math.random() * 8;

        particle.style.animation = `particleFloat ${duration}s ease-in-out ${delay}s infinite alternate`;

        container.appendChild(particle);
    }

    document.body.insertBefore(container, document.body.firstChild);
}

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    createLightRays();
    createWaterParticles();
});
