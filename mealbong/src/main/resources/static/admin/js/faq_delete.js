'use strict';

let faqDeleteModal = document.querySelector('.mainModal'),
    faqDeleteBody = document.querySelector('body'),
    faqDeleteNav = document.querySelector('nav'),
    faqDeleteButton = faqDeleteModal.querySelectorAll('.closeBtn'),
    faqDeleteBg = faqDeleteModal.querySelector('.bg');

const faqDeleteOpen = () => {
    faqDeleteModal.classList.remove('hidden');
    faqDeleteBody.classList.add('scroll_none');
    faqDeleteNav.style.position = 'static';
    faqDeleteNav.style.zIndex = '0';
}

const faqDeleteClose = () => {
    faqDeleteModal.classList.add('hidden');
    faqDeleteBody.classList.remove('scroll_none');
    faqDeleteNav.style.position = 'sticky';
    faqDeleteNav.style.zIndex = '2';
}


// 글 삭제 모달
function faqDelete(e) {
    faqDeleteOpen();
    faqDeleteButton[0].addEventListener("click", function () {
        $.ajax({
                url: "/faq/faqDelete?faq_number=" + e,
                type: "POST",
                data: {
                    'faq_number': e
                },
                success: function (data) {
                    console.log("제발");
                    window.location.href = '/admin/faqadmin?searchType=n';
                },
                error: function () {
                    console.log("에러");
                }
            }
        )
    })
}

faqDeleteBg.addEventListener('click', faqDeleteClose);
faqDeleteButton[1].addEventListener('click', faqDeleteClose);