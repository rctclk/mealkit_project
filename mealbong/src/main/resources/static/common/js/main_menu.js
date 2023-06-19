'use strict';

// 메뉴 슬라이드
let menuContainer = document.querySelector('.menuContainer'),
    menuDiv = menuContainer.querySelector('.main-top'),
    menuBackBtn = document.querySelector('.btn_back'),
    menuForwardBtn = document.querySelector('.btn_forward'),
    menu = menuDiv.querySelectorAll('.pop_pro'),
    menuBackBtn2 = document.querySelector('.btn_back2'),
    menuForwardBtn2 = document.querySelector('.btn_forward2'),
    menuContainer2 = document.querySelector('.menuContainer2'),
    menuDiv2 = document.querySelector('.main-top2');

let slide_idx = 0,
    slide_idx2 = 0,
    slide_endidx = menu.length - 1,
    slide_endidx2 = menu.length - 1,
    beforeTime = -new Date();

//연속클릭방지 지연시간
function time() {
    let currentTime = new Date();

    if (currentTime - beforeTime > 800) {
        beforeTime = currentTime;
        return true;
    }
}

// 버튼

function back() {
    if (slide_idx != 0) {
        slide_idx = slide_idx + +menuBackBtn.dataset.moveValue;
    }
    menuForwardBtn.classList.remove('nonVisible');
    if (slide_idx <= 0) {
        menuBackBtn.classList.add('nonVisible');
    }
}

function forward() {
    slide_idx = slide_idx + +menuForwardBtn.dataset.moveValue;

    menuBackBtn.classList.remove('nonVisible');
    if (slide_idx >= slide_endidx) {
        menuForwardBtn.classList.add('nonVisible');
    }
}

menuContainer.addEventListener('click', function (e) {
    if (time()) {
        const btn = e.target.closest('.menuContainer span');
        if (btn === menuBackBtn) {
            back();
        } else if (btn === menuForwardBtn) {
            forward();
        }
        menuDiv.style.left = `${slide_idx * -100}%`;
    }
});

//=============================================================

function back2() {
    if (slide_idx2 != 0) {
        slide_idx2 = slide_idx2 + +menuBackBtn2.dataset.moveValue;
    }
    menuForwardBtn2.classList.remove('nonVisible');
    if (slide_idx2 <= 0) {
        menuBackBtn2.classList.add('nonVisible');
    }
}

function forward2() {
    slide_idx2 = slide_idx2 + +menuForwardBtn2.dataset.moveValue;

    menuBackBtn2.classList.remove('nonVisible');
    if (slide_idx2 >= slide_endidx2) {
        menuForwardBtn2.classList.add('nonVisible');
    }
}

menuContainer2.addEventListener('click', function (e) {

    if (time()) {
        const btn = e.target.closest('.menuContainer2 span');
        if (btn === menuBackBtn2) {
            back2();
        } else if (btn === menuForwardBtn2) {
            forward2();
        }
        menuDiv2.style.left = `${slide_idx2 * -100}%`;
    }
});

//=============================================================

let menuBackBtn3 = document.querySelector('.btn_back3'),
    menuForwardBtn3 = document.querySelector('.btn_forward3'),
    menuContainer3 = document.querySelector('.menuContainer3'),
    menuDiv3 = document.querySelector('.main-top3'),
    slide_idx3 = 0,
    slide_endidx3 = menu.length - 1;

function back3() {
    if (slide_idx3 != 0) {
        slide_idx3 = slide_idx3 + +menuBackBtn3.dataset.moveValue;
    }
    menuForwardBtn3.classList.remove('nonVisible');
    if (slide_idx3 <= 0) {
        menuBackBtn3.classList.add('nonVisible');
    }
}

function forward3() {
    slide_idx3 = slide_idx3 + +menuForwardBtn3.dataset.moveValue;

    menuBackBtn3.classList.remove('nonVisible');
    if (slide_idx3 >= slide_endidx3) {
        menuForwardBtn3.classList.add('nonVisible');
    }
}

menuContainer3.addEventListener('click', function (e) {
    if (time()) {
        const btn = e.target.closest('.menuContainer3 span');
        if (btn === menuBackBtn3) {
            back3();
        } else if (btn === menuForwardBtn3) {
            forward3();
        }
        menuDiv3.style.left = `${slide_idx3 * -100}%`;
    }
});

//=============================================================

let menuBackBtn4 = document.querySelector('.btn_back4'),
    menuForwardBtn4 = document.querySelector('.btn_forward4'),
    menuContainer4 = document.querySelector('.menuContainer4'),
    menuDiv4 = document.querySelector('.main-top4'),
    slide_idx4 = 0,
    slide_endidx4 = menu.length - 1;

function back4() {
    if (slide_idx4 != 0) {
        slide_idx4 = slide_idx4 + +menuBackBtn4.dataset.moveValue;
    }
    menuForwardBtn4.classList.remove('nonVisible');
    if (slide_idx4 <= 0) {
        menuBackBtn4.classList.add('nonVisible');
    }
}

function forward4() {
    slide_idx4 = slide_idx4 + +menuForwardBtn4.dataset.moveValue;

    menuBackBtn4.classList.remove('nonVisible');
    if (slide_idx4 >= slide_endidx4) {
        menuForwardBtn4.classList.add('nonVisible');
    }
}

menuContainer4.addEventListener('click', function (e) {
    if (time()) {
        const btn = e.target.closest('.menuContainer4 span');
        if (btn === menuBackBtn4) {
            back4();
        } else if (btn === menuForwardBtn4) {
            forward4();
        }
        menuDiv4.style.left = `${slide_idx4 * -100}%`;
    }
});