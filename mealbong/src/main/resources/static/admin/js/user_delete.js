'use strict';

let user_deleteModal = document.querySelector('.mainModal'),
    user_deleteBody = document.querySelector('body'),
    user_deleteNav = document.querySelector('nav'),
    user_deleteButton = user_deleteModal.querySelectorAll('.closeBtn'),
    user_deleteBg = user_deleteModal.querySelector('.bg');
    // test_btn = document.getElementById('test_btn');

const user_deleteOpen = () => {
    user_deleteModal.classList.remove('hidden');
    user_deleteBody.classList.add('scroll_none');
    user_deleteNav.style.position = 'static';
    user_deleteNav.style.zIndex = '0';
}

const user_deleteClose = () => {
    user_deleteModal.classList.add('hidden');
    user_deleteBody.classList.remove('scroll_none');
    user_deleteNav.style.position = 'sticky';
    user_deleteNav.style.zIndex = '2';
}
//
// test_btn.addEventListener('click',()=>{
//     console.log("gdgsg");
// });

// 글 삭제 모달
function user_deleteClick(e) {
    console.log(user_deleteButton[1]);
    user_deleteOpen();

    user_deleteButton[0].addEventListener("click",function (){
        $.ajax({
                url: '/user1/admin/delete',
                type: 'POST',
                data: {
                    'user_id': e
                },
                success: function (data) {
                    console.log("제발");
                    // alert("제발");
                    window.location.href = '/admin/useradmin';
                },
                error: function () {
                    console.log("에러");
                    // alert("에러");
                }
            }
        )
    })
}

// function user_deleteClick(e) {
//     console.log(e);
// }

user_deleteBg.addEventListener('click', user_deleteClose);
user_deleteButton[1].addEventListener('click', user_deleteClose);