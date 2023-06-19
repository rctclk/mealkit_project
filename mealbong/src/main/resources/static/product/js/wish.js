'use strict'

const main = document.querySelector('main'),
    header = document.querySelector('header'),
    body = document.querySelector('body'),
    content_wish = main.querySelector('.content_wish'),
    content_wish_box = content_wish.querySelectorAll('.content_wish_box'),
    wish_delete = main.querySelectorAll('.wish_delete'),
    wish_put = main.querySelectorAll('.wish_put'),
    delet_modal_content = main.querySelector('.delet_modal_content'),
    put_modal_content = main.querySelector('.put_modal_content'),
    modal_p = delet_modal_content.querySelector('p'),
    delet_Btn = delet_modal_content.querySelectorAll('.delet_Btn'),
    goods_name = put_modal_content.querySelector('.goods_name'),
    goods_prize = put_modal_content.querySelector('.goods_prize'),
    goods_button = put_modal_content.querySelector('.goods_button'),
    [minus_goods, plus_goods] = goods_button.querySelectorAll('button'),
    tot_goods_prize = put_modal_content.querySelector('.tot_goods_prize'),
    put_Btn_div = put_modal_content.querySelector('.put_Btn_div'),
    put_Btn = put_Btn_div.querySelectorAll('.put_Btn');


// =========================  wish ==========================//
// 취소 모달창

let delet_target;
const nav = document.querySelector('nav');

const open = () => {
    body.classList.add('scroll_none');
    header.style.position = 'static';
    nav.style.zIndex = '0';
}

const close = () => {
    delet_modal_content.classList.add('hidden');
    put_modal_content.classList.add('hidden');
    body.classList.remove('scroll_none');
    header.style.position = 'sticky';
    nav.style.zIndex = '2';
}

delet_Btn[0].addEventListener('click', function () {
    close();
    delet_target.classList.add('hidden');
})

delet_Btn[1].addEventListener('click', close);

// 담기 모달창 // 담기 수정 해야함! 

let gCount = 1;
let gName;
let gPrize;

minus_goods.addEventListener('click', () => {
    if (gCount > 1) {
        gCount--;
    }
    putGoods();
});


plus_goods.addEventListener('click', () => {
    gCount++;
    putGoods();
});

function putGoods() {
    if (gCount == 1) {
        minus_goods.style.opacity = '.5'
    } else {
        minus_goods.style.opacity = '1'
    }
    goods_button.children[1].innerHTML = `<span>${gCount}</span>`
    tot_goods_prize.innerHTML = `<span>${(gPrize * gCount).toLocaleString()}원</span>`
}


content_wish.addEventListener('click', function (e) {
    const eventOj = e.target.closest('button');
    if (this.contains(eventOj)) {
        delet_target = e.target.parentNode.parentNode;
        if (eventOj.textContent == "담기") {
            gCount = 1;
            open();
            gName = e.target.parentNode.parentNode.children[1].children[0].children[0].textContent;
            gPrize = e.target.parentNode.parentNode.children[1].children[1].children[0].textContent.replace(',', '');
            put_modal_content.classList.remove('hidden');
            goods_name.innerHTML = `<span>${gName}</span>`
            goods_button.children[1].innerHTML = `<span>${gCount}</span>`
            goods_prize.innerHTML = `<span>${(gPrize * 1).toLocaleString()}원</span>`
            tot_goods_prize.innerHTML = `<span>${(gPrize * gCount).toLocaleString()}원</span>`
        } else {
            open();
            delet_modal_content.classList.remove('hidden');
            modal_p.textContent = "삭제하시겠습니까?";
        }
    }
})

put_Btn[1].addEventListener('click', close);

put_Btn[0].addEventListener('click', close);

// =========================  wish ==========================//


