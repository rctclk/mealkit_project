'use strict';

let noticeDeleteModal = document.querySelector('.mainModal'),
    noticeDeleteBody = document.querySelector('body'),
    noticeDeleteNav = document.querySelector('nav'),
    noticeDeleteButton = noticeDeleteModal.querySelectorAll('.closeBtn'),
    noticeDeleteBg = noticeDeleteModal.querySelector('.bg');

const noticeDeleteOpen = () => {
    noticeDeleteModal.classList.remove('hidden');
    noticeDeleteBody.classList.add('scroll_none');
    noticeDeleteNav.style.position = 'static';
    noticeDeleteNav.style.zIndex = '0';
}

const noticeDeleteClose = () => {
    noticeDeleteModal.classList.add('hidden');
    noticeDeleteBody.classList.remove('scroll_none');
    noticeDeleteNav.style.position = 'sticky';
    noticeDeleteNav.style.zIndex = '2';
}


// 글 삭제 모달
function noticeDelete(e) {
    noticeDeleteOpen();
    noticeDeleteButton[0].addEventListener("click", function () {
        $.ajax({
                url: "/notice/noticeDelete?notice_number=" + e,
                type: "POST",
                data: {
                    'notice_number': e
                },
                success: function (data) {
                    console.log("제발");
                    window.location.href = '/admin/noticeadmin';
                },
                error: function () {
                    console.log("에러");
                }
            }
        )
    })
}

noticeDeleteBg.addEventListener('click', noticeDeleteClose);
noticeDeleteButton[1].addEventListener('click', noticeDeleteClose);