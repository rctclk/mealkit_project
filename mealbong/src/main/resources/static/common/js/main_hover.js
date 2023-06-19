'use strict';

// 호버 했을 때 커지는거

let innerbox3 = document.querySelectorAll('.pop_pro'),
    img_container1 = document.querySelectorAll('.img_container'),
    food_img1 = document.querySelectorAll('.img_container img');

for (let i = 0; i < img_container1.length; i++) {
    food_img1[i].addEventListener('mouseenter', function (event) {
        event.target.style.transform = "scale(1.1)";
        event.target.style.transition = "all 0.5s";
    });

    food_img1[i].addEventListener('mouseleave', function (event) {
        event.target.style.transform = "scale(1)";
        event.target.style.transition = "all 0.5s";
    });
}

// 장바구니 팝업

const modal1 = document.querySelector('.modal_container'),
    bg1 = document.querySelector('.bg'),
    body1 = document.querySelector('body'),
    header1 = document.querySelector('nav'),
    modal_p1 = modal1.querySelector('p'),
    closeBtn1 = document.querySelectorAll('.closeBtn'),
    basket1 = document.querySelectorAll('.basket'),
//    closeBtnn = document.querySelector('.closeBtn'),
    user_id=document.getElementById("user_id"),
    product_number = document.getElementById("product_number");

const open1 = () => {
    modal1.classList.remove('hidden');
    body1.classList.add('scroll_none');
    header1.style.position = 'static';
}


const close1 = () => {
    modal1.classList.add('hidden');
    body1.classList.remove('scroll_none');
    header1.style.position = 'sticky';
}


function modal_f(str) {
    open1();
    modal_p1.textContent = str;
}
for(let i =0; i<closeBtn1.length; i++){
    closeBtn1[i].addEventListener('click', close1);
}

bg1.addEventListener('click', close1);

/* ===================== 좋아요 modal box ==================== */
/* 로그인 했는지 체크 후 이미 담긴 상품인지 확인 */

function login_check2(){
    $.ajax({
        url: "/user1/id_check",
        type: "POST",
        dataType:"JSON",
        data: {"user_id" : $(user_id).val()},
        success: function (data){
        if(data == 0){
            modal_f("로그인 하셔야 본 서비스를 이용하실 수 있습니다.");

            for(let i =0; i<closeBtn1.length; i++){
                closeBtn1[i].addEventListener('click', ()=> {
                window.location.href="/user1/login";
                })
            }

        } else if (data == 1) {
            product_check2();
            } // else if
        }, // success
        error : function (){
            alert("로그인 체크 오류");
        }
    }); // ajax
} // 로그인 체크

function product_check2(){
$.ajax({
    url: "/user1/product_check",
        type: "POST",
        dataType : "JSON",
        data: {"user_id" : $(user_id).val(),
        "product_number" : $(product_number).val()},
        success: function (data) {
            if(data == 0){
                songTest2();;
            } else if (data > 0) {
                modal_f("이미 찜한 상품입니다.");
            } // else if
         }, // success
         error: function(){
            alert("상품  체크 실패");
         } // error
    }); // ajax
} // product_check

function songTest2(){
    // 찜한 상품에 담기
    $.ajax({
        url: "/order/cartInsert",
            type: "POST",
            dataType : "JSON",
            data: {
            "user_id" : $(user_id).val(),
            "product_number" : $(product_number).val()
            }, // data
            success: function (data) {
//              modal_f("장바구니에 상품을 담았습니다.");
               if(data == 1){
                modal_f("찜한 상품에 상품을 담았습니다.");
               } else {
                modal_f("찜한 상품에 상품을 담지 못했습니다.");
               }
             }, // success
             error: function(){
                alert("찜한 상품에 담기 오류");
             } // error
        }); // ajax
} // songTest