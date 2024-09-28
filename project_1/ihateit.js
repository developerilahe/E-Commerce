document.addEventListener('DOMContentLoaded', function() {
    const mediaQuery = window.matchMedia('(max-width: 450px)');
    const headerCenter = document.querySelector('.header-center');
    const closeSidebarButton = document.getElementById('close-sidebar');
    const openMenuButton = document.getElementById('btn-menu');

    if (openMenuButton) {
        openMenuButton.addEventListener('click', function() {
            if (mediaQuery.matches) {
                headerCenter.style.left = '0';
            }
        });
    }

    if (closeSidebarButton) {
        closeSidebarButton.addEventListener('click', function() {
            headerCenter.style.left = '-100%';
        });
    }
});
