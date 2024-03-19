const acordeonItems = document.querySelectorAll('.acordeon');
acordeonItems.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});