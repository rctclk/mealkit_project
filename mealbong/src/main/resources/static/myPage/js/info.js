'use strict';
const main = document.querySelector('main'),
     info_button = document.querySelector('.info_button'),
    nav = document.querySelector('nav'),
    user_password = document.getElementById('user_password'),
    form_update = document.getElementById('form_update');



// ======모달참조
const modal = document.querySelector('.modal_container'),
    bg = document.querySelector('.bg'),
    body = document.querySelector('body'),
    header = document.querySelector('header'),
    modal_p = modal.querySelector('p'),
    closeBtn = document.querySelector('.closeBtn');
//
// // ===================================================
//
//
let clr1,clr2,clr3;

const open = () => {
    modal.classList.remove('hidden');
    body.classList.add('scroll_none');
    nav.style.zIndex = '0';
}

const close = () => {
    modal.classList.add('hidden');
    body.classList.remove('scroll_none');
    nav.style.zIndex = '2';
}

function modal_f(str) {
    open();
    modal_p.textContent = str;
}

closeBtn.addEventListener('click', close);
bg.addEventListener('click', close);


//=================추가


function pw_check() {
    $.ajax({
        url: "/user1/pw_check",
        type: "POST",
        dataType : "JSON",
        data : {"user_password" : $(user_password).val()},
        success : function (data) {

            if(data>0) {
                modal_f("비밀번호가 틀렸습니다.");
            } else {
                    form_update.submit();
                }

        },
        error : function () {
            alert("에러");
        }
    });
}


// test_btn.addEventListener('click',() =>{
//     user_update();
// });

info_button.addEventListener('click',()=>{
    pw_check();
});

