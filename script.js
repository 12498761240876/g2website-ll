document.addEventListener('DOMContentLoaded', function() {
    const decoContainer = document.querySelector('.decorative-elements');
    if (decoContainer) {
        const totalHeight = window.innerHeight;
        const totalWidth = window.innerWidth;
        const base = (totalWidth * totalHeight) / 25000;
        const starCount = Math.max(10, Math.min(30, Math.floor(base)));
        const swirlCount = Math.max(5, Math.min(10, Math.floor(base))); 
        
        const starSources = [
            'assests/FOUR_POINTED_STAR_1.png',
            'assests/FOUR_POINTED_STAR_2.png',
        ];
        for (let i = 0; i < starCount; i++) {
            const img = document.createElement('img');
            img.src = starSources[Math.floor(Math.random() * starSources.length)];
            img.className = 'sparkle';
            const size = 12 + Math.random() * 44;
            img.style.width = size + 'px';
            img.style.height = size + 'px';
            img.style.position = 'absolute';
            img.style.top = Math.random() * (totalHeight - size) + 'px';
            img.style.left = Math.random() * (totalWidth - size) + 'px';
            img.style.opacity = (0.4 + Math.random() * 0.6).toString();
            decoContainer.appendChild(img);
        }
        
        const swirlSources = [
            'assests/SWIRL_CIRCLES_1.png',
            'assests/SWIRL_CIRCLES_2.png'
        ];
        for (let i = 0; i < swirlCount; i++) {''
            const img = document.createElement('img');
            img.src = swirlSources[Math.floor(Math.random() * swirlSources.length)];
            img.className = 'swirl';
            const size = 20 + Math.random() * 50;
            img.style.width = size + 'px';
            img.style.height = size + 'px';
            img.style.position = 'absolute';
            img.style.top = Math.random() * (totalHeight - size) + 'px';
            img.style.left = Math.random() * (totalWidth - size) + 'px';
            img.style.opacity = (0.3 + Math.random() * 0.5).toString();
            decoContainer.appendChild(img);
        }
    }
    const button = document.querySelector('.cta-button');
    const decorativeElements = document.querySelectorAll('.decorative-elements img');
    
    button.addEventListener('click', function() {
        window.open('https://www.twitch.tv/67gam3rz', '_blank');
    });
    
    decorativeElements.forEach((element, index) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        element.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-10px);
            }
        }
    `;
    document.head.appendChild(style);

    const sparkles = document.querySelectorAll('.sparkle');
    sparkles.forEach((sparkle, index) => {
        setInterval(() => {
            sparkle.style.opacity = Math.random() > 0.5 ? '1' : '0.3';
        }, 1000 + index * 500);
    });
});

// parllax effect
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     document.querySelector('.big-star-center').style.transform = 
//         `translate(-50%, calc(-50% + ${scrolled * 0.3}px))`;
//     document.querySelector('.compass').style.transform = 
//         `translateY(${scrolled * 0.2}px)`;
// });

