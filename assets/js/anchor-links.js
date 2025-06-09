// Prevent automatic browser scroll restoration
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

async function initializeAnchors(){
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            // Wait for layout to settle
            setTimeout(() => {
                const headerOffset = document.querySelector('header')?.offsetHeight || 70;
                const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - headerOffset;

                console.log(`Hash link seen: ${hash}, Scrolling to: ${offsetPosition}`);;
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'auto'
                });
            }, 250);
        }
    }
}