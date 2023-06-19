'use strict';

const content = document.querySelector('.content'),
    inquiry_box = content.querySelector('.content_inquiry'),
    inquiry_list_content = content.querySelectorAll('.ans');

let current = inquiry_list_content[0];

inquiry_box.addEventListener("click", function (e) {

    let oj = e.target.closest('.qna_list');
    if (this.contains(oj)) {

        if (oj.children[1].classList.contains('hidden')) {
            current.classList.add('hidden')
            oj.children[1].classList.remove('hidden');
        }
        else {
            oj.children[1].classList.add('hidden');
        }
        current = oj.children[1];
    }
});


