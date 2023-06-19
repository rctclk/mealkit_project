'use strict';
/* ===================== 상품 리스트 정렬 ==================== */

function productList_order(orderList) {
    $.ajax({
        type: 'Get',
        url: 'productList2',
        data : {orderKey : orderList,
                currPage : 1,
                rowsPerPage : 8,
                category_code : category_code
              },
        success: function (resultPage) {
          $('#resultArea').html(resultPage);
        },
        error: function () {
          $('#resultArea').html('~~ Error 발생 !!! ~~~');
        }
      }); //ajax
} // productList_order

//productList_order(1);

function productList_order2(currPage) {
    console.log(currPage);
    $.ajax({
        type: 'Get',
        url: 'productList2',
        data : {orderKey : orderNo,
                currPage : currPage,
                rowsPerPage : 8,
                category_code : category_code
              },
        success: function (resultPage) {
          $('#resultArea').html(resultPage);
        },
        error: function () {
          $('#resultArea').html('~~ Error 발생 !!! ~~~');
                      alert("실패");
        }
      }); //ajax
}



// ===========================================================
// menulist에서 이미지 호버했을 때 이미지 확대

var innerbox33 = document.querySelector(".innerbox3"),
    img_container = innerbox33.querySelectorAll('.img_container'),
    food_img = innerbox33.querySelectorAll('img');


for (let i = 0; i < img_container.length; i++) {


    food_img[i].addEventListener('mouseenter', function (event) {
        event.target.style.transform = "scale(1.1)"
        event.target.style.transition = "all 0.5s"
    })


    food_img[i].addEventListener('mouseleave', function (event) {
        event.target.style.transform = "scale(1)"
        event.target.style.transition = "all 0.5s"
    })
}


/* =====================장바구니 modal box==================== */
/* 로그인 하기 전 */

var modall = document.querySelector('.modal_container'),
    bgg = document.querySelector('.bg'),
    bodyy = document.querySelector('body'),
    headerr = document.querySelector('header'),
    modal_p = modall.querySelector('p'),
    closeBtnn = document.querySelector('.closeBtn'),
    basket = innerbox33.querySelectorAll('.basket'),
    nav = document.querySelector('nav'),
    user_id=document.getElementById("user_id"),
    product_number = document.getElementById("product_number");

var openn = () => {
    modall.classList.remove('hidden');
    bodyy.classList.add('scroll_none');
    nav.style.zIndex ='0';
}

var closee = () => {
    modall.classList.add('hidden');
    bodyy.classList.remove('scroll_none');
        nav.style.zIndex ='2';
}

function modal_f(str) {
    openn();
    modal_p.textContent = str;
}

closeBtnn.addEventListener('click', closee);
bgg.addEventListener('click', closee);

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

            closeBtnn.addEventListener('click', ()=> {
            window.location.href="/user1/login";
            })

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
        url: "/order/wishInsert",
            type: "POST",
            dataType : "JSON",
            data: {
            "user_id" : $(user_id).val(),
            "product_number" : $(product_number).val()
            }, // data
            success: function (data) {
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

