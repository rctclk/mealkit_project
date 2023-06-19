'use strict';

let adminQModal = document.querySelector('.mainModal'),
    adminQBody = document.querySelector('body'),
    adminQNav = document.querySelector('nav'),
    adminQButton = adminQModal.querySelectorAll('.closeBtn'),
    adminQBg = adminQModal.querySelector('.bg');

const adminQOpen = () => {
    adminQModal.classList.remove('hidden');
    adminQBody.classList.add('scroll_none');
    adminQNav.style.position = 'static';
    adminQNav.style.zIndex = '0';
}

const adminQClose = () => {
    adminQModal.classList.add('hidden');
    adminQBody.classList.remove('scroll_none');
    adminQNav.style.position = 'sticky';
    adminQNav.style.zIndex = '2';
}


// 글 삭제 모달
function adminQ(e) {
    console.log(e);
    adminQOpen();

     adminQButton[0].addEventListener("click",function (){
        $.ajax({
                url: '/admin/qdelete?qna_num=' + e,
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

adminQBg.addEventListener('click', adminQClose);
adminQButton[1].addEventListener('click', adminQClose);