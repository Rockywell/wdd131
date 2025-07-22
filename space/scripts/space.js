// Intersection Observer for scale animation
const planets = document.querySelectorAll('.planet');
const observerOptions = { root: null, threshold: 0.5 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
    }
    });
}, observerOptions);
planets.forEach(img => observer.observe(img));

// Moons Data
const moonsData = {
    sun: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    mercury: [],
    venus: [],
    earth: ['Moon'],
    mars: ['Phobos', 'Deimos'],
    jupiter: ['Io', 'Europa', 'Ganymede', 'Callisto'],
    saturn: ['Titan', 'Rhea', 'Iapetus', 'Dione', 'Enceladus'],
    uranus: ['Titania', 'Oberon', 'Umbriel', 'Ariel', 'Miranda'],
    neptune: ['Triton', 'Nereid']
};

// Overlay Logic
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayContent = document.getElementById('overlayContent');
const closeBtn = document.getElementById('closeOverlay');

document.querySelectorAll('.moons-btn').forEach(btn => {
    btn.addEventListener('click', () => {
    const body = btn.dataset.body;
    overlayTitle.textContent = btn.textContent.replace('Show', '') + ' Astral Bodies';
    const items = moonsData[body];
    if (items.length) {
        overlayContent.innerHTML = items.map(m => `<p><strong>${m}</strong>: Description about ${m} goes here.</p>`).join('');
    } else {
        overlayContent.innerHTML = `<p>No known moons for this body.</p>`;
    }
    overlay.classList.add('active');
    });
});
closeBtn.addEventListener('click', () => overlay.classList.remove('active'));