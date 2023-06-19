'use strict';

let topBtn = document.querySelector('.topButton');

// ============================================================
// 탑버튼
document.addEventListener('scroll', () => {
    if (parseInt(window.scrollY) >= innerHeight / 3) {
        topBtn.classList.add('btnScroll');
    } else {
        topBtn.classList.remove('btnScroll');
    }
});

topBtn.addEventListener('mouseenter', () => {
    topBtn.classList.add('btnHover');
});

topBtn.addEventListener('mouseleave', () => {
    topBtn.classList.remove('btnHover');
});

topBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0, behavior: 'smooth'
    });
});