// Optional JavaScript for toggling navigation list visibility
document.getElementById('navbar').addEventListener('click', function () {
    const navList = document.getElementById('navs');
    if (window.innerWidth <= 768) {
        navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
    }
});
