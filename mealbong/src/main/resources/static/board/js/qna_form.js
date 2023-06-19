'use strict';

let qnaDiv = document.querySelector('.content_inquiry_form'),
    qnaModal = document.querySelector('.mainModal'),
    qnaBody = document.querySelector('body'),
    qnaNav = document.querySelector('nav'),
    qnaButton = qnaModal.querySelector('.closeBtn'),
    qnaBg = qnaModal.querySelector('.bg');

const qnaOpen = () => {
    qnaModal.classList.remove('hidden');
    qnaBody.classList.add('scroll_none');
    qnaNav.style.position = 'static';
    qnaNav.style.zIndex = '0';
}

const qnaClose = () => {
    qnaModal.classList.add('hidden');
    qnaBody.classList.remove('scroll_none');
    qnaNav.style.position = 'sticky';
    qnaNav.style.zIndex = '2';

    history.back();
}

// 글 등록 모달
function qna_Modal(e) {
    e.preventDefault();
    let form = document.getElementById('qna_form');
    let formData = new FormData(form);

    fetch('/qna/qnaform', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                qnaOpen();
                form.reset();
            } else {
                console.error('Error submitting form');
            }
        })
        .catch(error => {
            console.error('Error submitting form', error);
        });
}

qnaDiv.addEventListener('submit', qna_Modal);
qnaButton.addEventListener('click', qnaClose);
qnaBg.addEventListener('click', qnaClose);

// 글 수정 모달
function update_Modal(e) {
    e.preventDefault();
    let form = document.getElementById('update_form');
    let formData = new FormData(form);

    fetch('/qna/qnaupdate', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                qnaOpen();
                form.reset();
            } else {
                console.error('Error submitting form');
            }
        })
        .catch(error => {
            console.error('Error submitting form', error);
        });
}

qnaDiv.addEventListener('submit', update_Modal);
qnaButton.addEventListener('click', qnaClose);
qnaBg.addEventListener('click', qnaClose);

