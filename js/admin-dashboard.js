// Admin Dashboard JavaScript

document.addEventListener('DOMContentLoaded', function() {
    setupTabNavigation();
    setupSidebarToggle();
});

function setupSidebarToggle() {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    
    if (!sidebarToggle || !sidebar || !sidebarOverlay) return;
    
    // Toggle sidebar
    sidebarToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        sidebar.classList.toggle('show');
        sidebarOverlay.classList.toggle('show');
    });
    
    // Close sidebar when overlay is clicked
    sidebarOverlay.addEventListener('click', function() {
        sidebar.classList.remove('show');
        sidebarOverlay.classList.remove('show');
    });
    
    // Close sidebar when a nav link is clicked (on mobile/tablet)
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth < 992) {
                sidebar.classList.remove('show');
                sidebarOverlay.classList.remove('show');
            }
        });
    });
    
    // Close sidebar on window resize if switching to desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 992) {
            sidebar.classList.remove('show');
            sidebarOverlay.classList.remove('show');
        }
    });
}

function setupTabNavigation() {
    document.querySelectorAll('.sidebar .nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.dataset.tab;
            
            document.querySelectorAll('.sidebar .nav-link').forEach(l => {
                l.classList.remove('active');
            });
            this.classList.add('active');
            
            document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.add('d-none'));
            const targetPane = document.getElementById(targetTab);
            if (targetPane) {
                targetPane.classList.remove('d-none');
            }
        });
    });
}


