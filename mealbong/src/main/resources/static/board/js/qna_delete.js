'use strict';

let deleteModal = document.querySelector('.mainModal'),
    deleteBody = document.querySelector('body'),
    deleteNav = document.querySelector('nav'),
    deleteButton = deleteModal.querySelectorAll('.closeBtn'),
    deleteBg = deleteModal.querySelector('.bg');

const deleteOpen = () => {
    deleteModal.classList.remove('hidden');
    deleteBody.classList.add('scroll_none');
    deleteNav.style.position = 'static';
    deleteNav.style.zIndex = '0';
}

const deleteClose = () => {
    deleteModal.classList.add('hidden');
    deleteBody.classList.remove('scroll_none');
    deleteNav.style.position = 'sticky';
    deleteNav.style.zIndex = '2';
}


// 글 삭제 모달
function handleDeleteClick(e) {
    console.log(e);
    deleteOpen();

     deleteButton[0].addEventListener("click",function (){
        $.ajax({
                url: '/qna/qnadelete?qna_num=' + e,
                type: 'POST',
                data: {
                    'qna_num': e
                },
                success: function (data) {
                    console.log("제발");
                    window.location.href = '/qna/qnalist';
                },
                error: function () {
                    console.log("에러");
                }
            }
        )
    })
}

deleteBg.addEventListener('click', deleteClose);
deleteButton[1].addEventListener('click', deleteClose);