const cursor = document.getElementById('custom-cursor');
const cursorTrail = document.getElementById('cursor-trail');
let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    const target = e.target;
    if (target.closest('.countdown-value') || target.closest('.power-button')) {
        cursor.style.transform = 'scale(1.5)';
    } else {
        cursor.style.transform = 'scale(1)';
    }
});

function updateTrail() {
    const dx = mouseX - trailX;
    const dy = mouseY - trailY;

    trailX += dx * 0.1;
    trailY += dy * 0.1;

    cursorTrail.style.left = `${trailX}px`;
    cursorTrail.style.top = `${trailY}px`;

    requestAnimationFrame(updateTrail);
}
updateTrail();

function createBinaryRain() {
    const container = document.querySelector('.binary-rain');
    const chars = '10';
    const maxBinaries = 50;
    const binaryPool = [];

    if (!container) {
        console.error('Binary rain container not found.');
        return;
    }

    function createBinary() {
        if (binaryPool.length >= maxBinaries) return;

        const binary = document.createElement('div');
        binary.className = 'binary';
        binary.style.left = `${Math.random() * 100}vw`;
        binary.style.animationDuration = `${Math.random() * 3 + 2}s`;
        binary.style.opacity = Math.random();
        binary.innerText = chars[Math.floor(Math.random() * chars.length)];
        container.appendChild(binary);
        binaryPool.push(binary);

        binary.addEventListener('animationend', () => {
            binaryPool.splice(binaryPool.indexOf(binary), 1);
            binary.remove();
        });
    }

    setInterval(createBinary, 200);
}
createBinaryRain();

const powerButton = document.querySelector('.power-button');
let isPowered = true;

powerButton.addEventListener('click', () => {
    isPowered = !isPowered;
    document.body.style.filter = isPowered ? 'none' : 'brightness(0.5) saturate(0.5)';

    const glitchDuration = 500;
    const container = document.querySelector('.container');

    if (!isPowered) {
        let glitches = 10;
        const glitchInterval = setInterval(() => {
            container.style.transform = `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)`;
            if (--glitches <= 0) clearInterval(glitchInterval);
        }, 50);
    } else {
        container.style.transform = 'none';
    }
});

class Particle {
    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
        this.size = Math.random() * 3;
        this.color = Math.random() > 0.5 ? '#00ffff' : '#ff00ff';
    }

    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.speed = Math.random() * 2 + 1;
        this.angle = Math.random() * Math.PI * 2;
        this.velocity = {
            x: Math.cos(this.angle) * this.speed,
            y: Math.sin(this.angle) * this.speed
        };
        this.alpha = Math.random();
        this.growing = Math.random() > 0.5;
    }

    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x < 0 || this.x > this.canvas.width || this.y < 0 || this.y > this.canvas.height) {
            this.reset();
        }

        if (this.growing) {
            this.alpha += 0.01;
            if (this.alpha >= 0.8) this.growing = false;
        } else {
            this.alpha -= 0.01;
            if (this.alpha <= 0.1) this.growing = true;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const canvas = document.createElement('canvas');
canvas.id = 'particles';
document.body.insertBefore(canvas, document.body.firstChild);
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', throttle(resizeCanvas, 200));
resizeCanvas();

const particles = Array.from({ length: 100 }, () => new Particle(canvas));

function animateParticles() {
    if (isPowered) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.update();
            particle.draw(ctx);
        });
    }
    requestAnimationFrame(animateParticles);
}
animateParticles();

function throttle(func, limit) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= limit) {
            lastCall = now;
            func(...args);
        }
    };
}

const targetDate = new Date('2024-12-31T00:00:00').getTime();

function updateCountdown() {
    const now = Date.now();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector('.countdown').innerHTML = '<div class="countdown-value">NEXUS ACTIVATED</div>';
    }
}
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
