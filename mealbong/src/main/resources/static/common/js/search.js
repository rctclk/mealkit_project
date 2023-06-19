'use strict';

// 호버 했을 때 커지는거 

let search_result_div = document.querySelector('.search_result_div'),
    search_food_box = document.querySelectorAll('.food_box'),
    search_food_img = search_result_div.getElementsByTagName('img');


for (let i = 0; i < search_food_box.length; i++) {
    search_food_img[i].addEventListener('mouseenter', function (event) {
        event.target.style.transform = "scale(1.1)";
        event.target.style.transition = "all 0.5s";
    });


    search_food_img[i].addEventListener('mouseleave', function (event) {
        event.target.style.transform = "scale(1)";
        event.target.style.transition = "all 0.5s";
    });
}

// window.onload = function() {
//     let search_result_div = document.querySelector('.search_result_div');
//     let search_food_box = document.querySelector('.food_box');
//     let search_img_container = document.querySelectorAll('.img_container');
//     let search_food_img = document.querySelectorAll('img');
//
//     for (let i = 0; i < search_img_container.length; i++) {
//         search_food_img[i].addEventListener('mouseenter', function (event) {
//             event.target.style.transform = "scale(1.1)";
//             event.target.style.transition = "all 0.5s";
//         });
//
//         search_food_img[i].addEventListener('mouseleave', function (event) {
//             event.target.style.transform = "scale(1)";
//             event.target.style.transition = "all 0.5s";
//         });
//     }
// }



// 장바구니 팝업

// const modal = document.querySelector('.mainModal'),
//     bg = document.querySelector('.bg'),
//     body = document.querySelector('body'),
//     header = document.querySelector('nav'),
//     modal_p = modal.querySelector('p'),
//     closeBtn = document.querySelector('.closeBtn'),
//     basket = document.querySelectorAll('.basket');
//
// const open = () => {
//     modal.classList.remove('hidden');
//     body.classList.add('scroll_none');
//     header.style.position = 'static';
// }
//
// const close = () => {
//     modal.classList.add('hidden');
//     body.classList.remove('scroll_none');
//     header.style.position = 'sticky';
// }
//
// for (let i = 0; i < basket.length; i++) {
//
//     basket[i].addEventListener('click', () => {
//         modal_f("로그인 하셔야 본 서비스를 이용하실 수 있습니다.");
//     });
// }
//
// function modal_f(str) {
//     open();
//     modal_p.textContent = str;
// }
//
// closeBtn.addEventListener('click', close);
// bg.addEventListener('click', close);