const mediaQuery = window.matchMedia('(max-width: 450px)');

function handleMenuToggle() {
    const headerCenter = document.querySelector('.header-center');
    
    if (mediaQuery.matches) {
        // Menü açma
        document.getElementById('btn-menu').addEventListener('click', function() {
            headerCenter.style.left = '0';
        });

        // Menü kapama
        document.getElementById('close-sidebar').addEventListener('click', function() {
            headerCenter.style.left = '-100%';
        });
    } else {
        // Geniş ekranlarda menüyü her zaman kapalı tut
        headerCenter.style.left = '-100%';
    }
}

handleMenuToggle();
window.addEventListener('resize', handleMenuToggle);

const upButton = document.querySelector('.up');
const icon = document.querySelector('.up i');

// Scroll event to show/hide the button
window.addEventListener('scroll', function() {
  if (window.scrollY > 2500) {
    upButton.classList.add('show');
    upButton.style.opacity = '1'; 
    upButton.style.visibility = 'visible'; // Make button visible when scrolled past 2500px
  } else {
    upButton.classList.remove('show');
    upButton.style.opacity = '0'; 
    upButton.style.visibility = 'hidden';  // Hide button when scrolled above 2500px
  }
});

// Click event to scroll to the top smoothly and move icon upwards
upButton.addEventListener('click', function() {
  icon.style.transform = 'translateY(-900px)'; // Move the icon upwards
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Keep the button visible during the scroll back to the top
  upButton.style.opacity = '1'; 
  upButton.style.visibility = 'visible';

  // After scrolling finishes, hide the button and reset its position after 0.3s
  setTimeout(() => {
    upButton.style.opacity = '0';  // Fade out the button
    upButton.style.visibility = 'hidden';  // Hide it completely

    // Reset icon's position after it disappears
    setTimeout(() => {
      icon.style.transform = 'translateY(0)';  // Reset the icon's position
    }, 300);  // Wait 0.3 seconds before resetting
  }, 1000);  // Adjust timing to match scroll time
});
