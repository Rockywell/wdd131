// Observer for interactive animations.
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
        }
    });
}, { root: null, threshold: 0.6 });

const planets = document.querySelectorAll('.planet');

planets.forEach(planet => {
    observer.observe(planet)

    // After the scaling transition ends, add the wiggle animation
    planet.addEventListener('transitionend', () => {
        planet.classList.add('wiggling');
    }, { once: true });

});



const astralData = {
    sun: [
        {
            name: "Mercury",
            description: "Closest planet to the Sun, extremely hot during the day, freezing at night."
        },
        {
            name: "Venus",
            description: "Has a thick atmosphere that traps heat, making it the hottest planet in the Solar System"
        },
        {
            name: "Earth",
            description: "The Sun's energy makes life possible; Earth's perfect distance from the Sun supports water in liquid form."
        },
        {
            name: "Mars",
            description: "The Sun's energy fuels its seasons; its thin atmosphere can't keep heat in like Earth."
        },
        {
            name: "Jupiter",
            description: "Reflects a lot of sunlight; its strong gravity protects Earth from comets."
        },
        {
            name: "Saturn",
            description: "Its bright rings reflect sunlight, making it one of the most visually striking planets."
        },
        {
            name: "Uranus",
            description: "Spins on its side, possibly due to a massive collision; receives sunlight in a weird way."
        },
        {
            name: "Neptune",
            description: "The farthest planet from the Sun, so it gets very little sunlight and is extremely cold."
        }
    ],
    mercury: [{
            name: "Temperature",
            description: "Mercury gets extremely hot during the day and freezing cold at night. Up to 800°F and as low as -290°F!"
    }],
    venus: [{
            name: "Volcanoes",
            description: "Venus has more volcanoes than any other planet in the solar system, over 1,600!"
    }],
    earth: [{
            name: "Moon",
            description: "Earth's only natural satellite, often referred to simply as \"the Moon\". It is about 1/4th the size of Earth and is the fifth-largest moon in the Solar System. The Moon is slowly drifting away from Earth at a rate of about 1.5 inches (3.8 cm) per year."
    }],
    mars: [{
            name: "Phobos",
            description: "Phobos is the larger of Mars' two moons and is irregularly shaped. It orbits Mars at an incredibly close distance—about 3,700 miles (6,000 kilometers) from the planet’s surface. Phobos is gradually spiraling inward towards Mars and will eventually be destroyed in about 50 million years, possibly forming a ring around the planet."
        },
        {
            name: "Deimos",
            description: "Deimos is the smaller of Mars' two moons and is irregular in shape. It orbits Mars at a distance of about 14,500 miles (23,460 kilometers), and its orbit is so slow that it takes about 30.3 hours to complete one orbit around the planet."
    }],
    jupiter: [{
            name: "Io",
            description: "Io is the most geologically active body in the Solar System, with hundreds of active volcanoes that erupt lava fountains as high as 250 miles (400 kilometers). This volcanic activity is powered by tidal heating caused by the gravitational pull of Jupiter and the other moons."
        },
        {
            name: "Europa",
            description: "Europa is covered by a thick layer of ice, and scientists believe there is an ocean beneath it. Europa is a prime candidate for the search for extraterrestrial life due to its potential subsurface ocean."
        },
        {
            name: "Ganymede",
            description: "Ganymede is the largest moon in the Solar System, even bigger than the planet Mercury. It has its own magnetic field, the only moon known to have one."
        },
        {
            name: "Callisto",
            description: "Callisto is one of Jupiter's largest moons and is heavily cratered. Its surface is thought to be the oldest in the Solar System, over 4 billion years old."
    }],
    saturn: [{
            name: "Titan",
            description: "Titan is the largest moon of Saturn and is the second-largest moon in the Solar System. It has a thick atmosphere and lakes of liquid methane and ethane on its surface, making it the only moon in the Solar System known to have a dense atmosphere."
        },
        {
            name: "Rhea",
            description: "Rhea is Saturn's second-largest moon and is mostly composed of water ice. It has a very thin atmosphere made up mainly of oxygen and carbon dioxide, but it is far too thin to breathe."
        },
        {
            name: "Iapetus",
            description: "Iapetus is known for its unique two-tone coloration—one side is very dark and the other is very bright. This is believed to be due to the accumulation of dark material from Saturn's outer moon, Phoebe."
        },
        {
            name: "Dione",
            description: "Dione is a small, icy moon of Saturn. Its surface is covered in bright, reflective water ice and it has large cliffs and ridges, likely created by tectonic forces."
        },
        {
            name: "Enceladus",
            description: "Enceladus is one of Saturn's most intriguing moons due to its active geysers that shoot water vapor and ice particles into space, indicating the presence of an underground ocean beneath its icy surface."
    }],
    uranus: [{
            name: "Titania",
            description: "Titania is the largest moon of Uranus and is composed mostly of ice and rock. It has a large canyon system, which may have formed due to tectonic activity."
        },
        {
            name: "Oberon",
            description: "Oberon is the second-largest moon of Uranus and is heavily cratered. It is believed to have a mostly frozen surface with a small, rocky core."
        },
        {
            name: "Umbriel",
            description: "Umbriel is one of Uranus' darkest moons, with a surface that is mostly made of water ice and dark organic compounds. Its low albedo makes it one of the darkest moons in the Solar System."
        },
        {
            name: "Ariel",
            description: "Ariel is an icy moon of Uranus, with a surface covered in large canyons and ridges, possibly formed by tectonic forces. The moon's surface is among the brightest in the Uranian system."
        },
        {
            name: "Miranda",
            description: "Miranda is the smallest of Uranus' major moons, and it has one of the most diverse and dramatic surfaces in the Solar System, with large valleys and ridges formed by tectonic processes."
    }],
    neptune: [{
            name: "Triton",
            description: "Triton is Neptune's largest moon, and it has a retrograde orbit, meaning it moves in the opposite direction of Neptune's rotation. This suggests it was likely captured by Neptune's gravity."
        },
        {
            name: "Nereid",
            description: "Nereid is Neptune's third-largest moon and has one of the most eccentric orbits of any moon in the Solar System. Its orbit is highly elliptical, meaning it varies greatly in distance from Neptune."
    }]
};


// Overlay Logic
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayContent = document.getElementById('overlayContent');
const closeButton = document.getElementById('closeOverlay');

function buildFunFactOverlay(funFactButton, funFacts = [{name: "Fun Fact", description: "Did you know facts are true?"}]) {
    const subject = funFactButton.dataset.body;
    const topic = funFactButton.textContent.replace('Show', '');



    overlayTitle.textContent = `${subject.charAt(0).toUpperCase()}${subject.slice(1)}'s ${topic.trim()}`;

    if (funFacts.length) {
        overlayContent.innerHTML = funFacts.map(m => `<section><h3>${m.name}</h3><p><br>${m.description}</p></section>`).join('<br>');
    } else {
        overlayContent.innerHTML = `<p>No known ${topic.toLowerCase()} for the ${subject}.</p>`;
    }
    overlay.classList.add('active');
}

document.querySelectorAll('.astral-btn').forEach(button => {
    button.addEventListener('click', () => {
        const astralBody = button.dataset.body;
        buildFunFactOverlay(button, astralData[astralBody]);
    });
});
closeButton.addEventListener('click', () => overlay.classList.remove('active'));