function readMore() {
    const dots = document.getElementById('dots');
    const more = document.getElementById('more');
    const btn = document.getElementById('btn');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btn.innerHTML = 'Подробнее';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btn.innerHTML = 'Скрыть';
        more.style.display = 'inline';
    }
}


