'use strict';

let proDiv = document.querySelector('.product_insert_form'),
    proModal = document.querySelector('.mainModal'),
    proBody = document.querySelector('body'),
    proNav = document.querySelector('nav'),
    proButton = proModal.querySelector('.clsBtn'),
    proBg = proModal.querySelector('.bg');

const proOpen = () => {
    proModal.classList.remove('hidden');
    proBody.classList.add('scroll_none');
    proNav.style.position = 'static';
    proNav.style.zIndex = '0';
}

const proClose = () => {
    proModal.classList.add('hidden');
    proBody.classList.remove('scroll_none');
    proNav.style.position = 'sticky';
    proNav.style.zIndex = '2';

    history.back();
}

// 글 등록 모달
function pro_Modal(e) {
    e.preventDefault();
    let form = document.getElementById('product_form');
    let formData = new FormData(form);

    fetch('/product/productForm', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                proOpen();
                form.reset();
            } else {
                console.error('Error submitting form');
            }
        })
        .catch(error => {
            console.error('Error submitting form', error);
        });
}

proDiv.addEventListener('submit', pro_Modal);
proButton.addEventListener('click', proClose);
proBg.addEventListener('click', proClose);

// 글 수정 모달
function update_Modal(e) {
    e.preventDefault();
    let form = document.getElementById('pro_update_form');
    let formData = new FormData(form);

    fetch('/product/productUpdate', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                proOpen();
                form.reset();
            } else {
                console.error('Error submitting form');
            }
        })
        .catch(error => {
            console.error('Error submitting form', error);
        });
}

proDiv.addEventListener('submit', update_Modal);
proButton.addEventListener('click', proClose);
proBg.addEventListener('click', proClose);

