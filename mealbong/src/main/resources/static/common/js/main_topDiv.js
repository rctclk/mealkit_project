'use strict';

// 버튼 클릭 시 검색 페이지 넘어가기 / 모달 팝업 뜨기

let searchDiv = document.querySelector('.search'),
    mainModal = document.querySelector('.mainModal'),
    body = document.querySelector('body'),
    header = document.querySelector('header'),
    nav = document.querySelector('nav'),
    button = searchDiv.querySelector('.button'),
    closeBtn = mainModal.querySelector('.closeBtn'),
    bg = mainModal.querySelector('.bg'),
    buttonInput = document.getElementById('search_input');

const open = () => {
    mainModal.classList.remove('hidden');
    body.classList.add('scroll_none');
    nav.style.position = 'static';
    nav.style.zIndex = '0';
}

const close = () => {
    mainModal.classList.add('hidden');
    body.classList.remove('scroll_none');
    nav.style.position = 'sticky';
    nav.style.zIndex = '2';
}

function modal(e) {
    let searchInput = buttonInput.value;
    if (searchInput == "") {
        e.preventDefault();
        open();
    }
}

buttonInput.addEventListener('keydown', function (e) {
    if (e.key == 'Enter') {
        e.preventDefault();
        button.click();
    }
});

button.addEventListener('click', function (e) {
    modal(e);
});

closeBtn.addEventListener('click', close);
bg.addEventListener('click', close);