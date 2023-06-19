'use strict';

let ansDiv = document.querySelector('.content_inquiry_form'),
    ansModal = document.querySelector('.mainModal'),
    ansBody = document.querySelector('body'),
    ansNav = document.querySelector('nav'),
    ansButton = ansModal.querySelector('.closeBtn'),
    ansBg = ansModal.querySelector('.bg');

const ansOpen = () => {
    ansModal.classList.remove('hidden');
    ansBody.classList.add('scroll_none');
    ansNav.style.position = 'static';
    ansNav.style.zIndex = '0';
}

const ansClose = () => {
    ansModal.classList.add('hidden');
    ansBody.classList.remove('scroll_none');
    ansNav.style.position = 'sticky';
    ansNav.style.zIndex = '2';

    history.back();
}

// 답변 등록, 수정 모달
function ans_Modal(e) {
    e.preventDefault();
    let form = document.getElementById('ans_form');
    let formData = new FormData(form);

    fetch('/admin/ansform', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                ansOpen();
                form.reset();
            } else {
                console.error('Error submitting form');
            }
        })
        .catch(error => {
            console.error('Error submitting form', error);
        });
}

ansDiv.addEventListener('submit', ans_Modal);
ansButton.addEventListener('click', ansClose);
ansBg.addEventListener('click', ansClose);

