'use strict';

let ansDeleteModal = document.querySelector('.mainModal'),
    ansDeleteBody = document.querySelector('body'),
    ansDeleteNav = document.querySelector('nav'),
    ansDeleteButton = ansDeleteModal.querySelectorAll('.closeBtn'),
    ansDeleteBg = ansDeleteModal.querySelector('.bg');

const ansDeleteOpen = () => {
    ansDeleteModal.classList.remove('hidden');
    ansDeleteBody.classList.add('scroll_none');
    ansDeleteNav.style.position = 'static';
    ansDeleteNav.style.zIndex = '0';
}

const ansDeleteClose = () => {
    ansDeleteModal.classList.add('hidden');
    ansDeleteBody.classList.remove('scroll_none');
    ansDeleteNav.style.position = 'sticky';
    ansDeleteNav.style.zIndex = '2';
}


// 글 삭제 모달
function ansDelete(e) {
    console.log(e);
    ansDeleteOpen();

     ansDeleteButton[0].addEventListener("click",function (){
        $.ajax({
                url: '/admin/ansdelete?qna_num=' + e,
                type: 'POST',
                data: {
                    'qna_num': e
                },
                success: function (data) {
                    console.log("제발");
                    window.location.href = '/admin/qnaadmin?searchType=n';
                },
                error: function () {
                    console.log("에러");
                }
            }
        )
    })
}

ansDeleteBg.addEventListener('click', ansDeleteClose);
ansDeleteButton[1].addEventListener('click', ansDeleteClose);