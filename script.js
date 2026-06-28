// Cursor
const dot = document.getElementById('dot');
const ring = document.getElementById('ring');


let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
});


(function loop() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop)
})();



document.querySelectorAll('a,button').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('big'); ring.classList.add('big') });
    el.addEventListener('mouseleave', () => { dot.classList.remove('big'); ring.classList.remove('big') });
});

// Scroll reveal
const obs = new IntersectionObserver(e => {
    e.forEach(x => { if (x.isIntersecting) x.target.classList.add('in') })
}, { threshold: 0.1 });


document.querySelectorAll('.r').forEach(el => obs.observe(el));

// Skill bars
const so = new IntersectionObserver(e => {
    e.forEach(x => { if (x.isIntersecting) { x.target.querySelectorAll('.sk-fill').forEach(b => b.style.width = b.dataset.w + '%'); so.unobserve(x.target) } })
}, { threshold: 0.3 });


const sg = document.getElementById('sg'); if (sg) so.observe(sg);
// ── Mobile nav hamburger ──
const navToggle = document.getElementById('nav-toggle');
const navR = document.getElementById('nav-r');
const navOverlay = document.getElementById('nav-overlay');

function openNav() {
    navToggle.classList.add('open');
    navR.classList.add('open');
    navOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    navToggle.classList.remove('open');
    navR.classList.remove('open');
    navOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

navToggle.addEventListener('click', () => {
    navR.classList.contains('open') ? closeNav() : openNav();
});

// Close when clicking overlay
navOverlay.addEventListener('click', closeNav);

// Close when clicking any nav link
document.querySelectorAll('.nav-close-link').forEach(link => {
    link.addEventListener('click', closeNav);
});

// Close on resize back to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeNav();
});