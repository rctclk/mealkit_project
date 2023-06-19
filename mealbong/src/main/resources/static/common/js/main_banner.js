'use strict';

let slides = document.querySelector('.main-banner'),
    slide = document.querySelectorAll('.main-banner li'),
    currentIdx = 0,
    slideCount = slide.length,
    container = document.querySelector('.slide-container'),
    prevBtn = container.querySelector('.btn_left img'),
    nextBtn = container.querySelector('.btn_right img');


//연속클릭방지 지연시간
function time() {
    let currentTime = new Date();
    if (currentTime - beforeTime > 800) {
        beforeTime = currentTime;
        return true;
    }
}

function moveSlide(num) {
    slides.style.marginLeft = -num * 100 + '%';
    currentIdx = num;
}

nextBtn.addEventListener('click', function (e) {
    if (time()) {
        e.preventDefault();
        if (currentIdx < slideCount - 1) {
            moveSlide(currentIdx + 1);
        } else {
            moveSlide(0);
        }
    }
});

prevBtn.addEventListener('click', function (e) {
    if (time()) {
        e.preventDefault();
        if (currentIdx > 0) {
            moveSlide(currentIdx - 1);
        } else {
            moveSlide(slideCount - 1);
        }
    }
});

let timer = undefined;

function autoSlide() {
    if (timer == undefined) {
        timer = setInterval(function () {
            if (currentIdx < slideCount - 1) {
                moveSlide(currentIdx + 1);
            } else {
                moveSlide(0);
            }
        }, 4000);
    }
}
autoSlide();

function stopSlide() {
    clearInterval(timer);
    timer = undefined;
}

slides.addEventListener('mouseenter', function () {
    stopSlide();
});

slides.addEventListener('mouseleave', function () {
    autoSlide();
});