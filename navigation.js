document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;
    const scrollThreshold = 150;

    if (nav) {
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;

            if (currentScroll > scrollThreshold) {
                nav.classList.add('visible');
            } else {
                nav.classList.remove('visible');
            }

            lastScroll = currentScroll;
        });
    }

    const links = document.querySelectorAll('a[href^="index.html"], a[href^="vod.html"], a[href^="analytics.html"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href && !this.hasAttribute('target')) {
                e.preventDefault();
                
                document.body.classList.add('page-transition');
                
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });

    document.body.classList.add('page-loaded');
});
