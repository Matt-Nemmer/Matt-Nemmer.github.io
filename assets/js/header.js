

    let lastActiveId = null;

function updateActiveSection() {
    let closestSection = null;
    let closestDistance = Infinity;
    const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .nav-link');

    const triggerY = window.innerHeight * 0.4;
    const scrollTop = window.scrollY || window.pageYOffset;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const distanceFromTrigger = Math.abs(rect.top - triggerY);
        if (distanceFromTrigger < closestDistance && section.id) {
            closestDistance = distanceFromTrigger;
            closestSection = section;
        }
    });

    if (scrollTop < 100) {
        closestSection = sections[0];
    }

    if (closestSection && closestSection.id && closestSection.id !== lastActiveId) {
        lastActiveId = closestSection.id;

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            link.classList.toggle('active', linkHref === `#${lastActiveId}`);
        });

        const primaryColorCookie = getCookie("primaryColor");
        if (primaryColorCookie == null || primaryColorCookie == "random") {
            applySettings();
        }
    }
}



async function initializeHeader(){
    // Event listener for navigation elements
    document.querySelectorAll('header .nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            // Update the 'active' navigation item
            const currentActive = document.querySelector('header .nav-link.active');
            if( currentActive ){
                currentActive.classList.remove('active');
            }
            event.target.classList.add('active');

            // Randomize color if necessary
            var primaryColorCookie = getCookie("primaryColor");
            if (primaryColorCookie == null || primaryColorCookie == "random"){
                applySettings();
            } 
        });
    });

    // Attach scroll and resize events
    window.addEventListener('scroll', updateActiveSection);
    window.addEventListener('resize', updateActiveSection);

    // Run it once on page load
    updateActiveSection();

}
























/*




window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      // Delay to let layout settle
      setTimeout(() => {
        const headerOffset = document.querySelector('header').offsetHeight || 80;
        const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'auto' // or 'smooth' if you want animated scroll
        });
      }, 50); // slight delay to let the browser finish layout
    }
  }
});





document.documentElement.style.scrollBehavior = 'auto';

html {
  scroll-behavior: smooth;
}


setTimeout(() => {
  document.documentElement.style.scrollBehavior = '';
}, 100);






"Sure! You can say to me later:

"Can you help me add offset scrolling for internal anchor links, so that when I click links like <a href="#section">, the page scrolls smoothly and accounts for my sticky header?"

That will let me pick up right where we left off. Have a great day!


"

*/