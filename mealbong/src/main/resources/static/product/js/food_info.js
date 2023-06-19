'use strict';

/* =====================좋아요 및 장바구니 modal box==================== */
/* 로그인 하기 전 */

const modall = document.querySelector('.modal_container'),
    bgg = document.querySelector('.bg'),
    bodyy = document.querySelector('body'),
    headerr = document.querySelector('nav'),
    modalBox = modall.querySelector('.modalBox'),
    modal_p = modall.querySelector('p'),
    closeBtnn = document.querySelector('.closeBtn'),
    innerbox2 = document.querySelector('.innerbox2'),
    basket = innerbox2.querySelector('.basket'),
    wish = innerbox2.querySelector('.wish'),
    outerbox2 = document.querySelector('.outerbox2'),
    product_review = outerbox2.querySelector('.product_review'),
    product_inquiry = outerbox2.querySelector('.product_inquiry'),
    user_id=document.getElementById("user_id"),
    product_number = document.getElementById("product_number"),
    cartInsert = document.getElementById("cartInsert");

const openn = () => {
    modall.classList.remove('hidden');
    bodyy.classList.add('scroll_none');
    headerr.style.position = 'static';
    navv.style.zIndex = '0';
}

const closee = () => {
    modall.classList.add('hidden');
    bodyy.classList.remove('scroll_none');
    headerr.style.position = 'sticky';
    navv.style.zIndex = '2';
}


function modal_f(str) {
    openn();
    modal_p.textContent = str;
}

closeBtnn.addEventListener('click', closee);
bgg.addEventListener('click',() => {
    closee();
    SNS_close();
});
/* ===================== 장바구니 modal box ================== */
/* 로그인 했는지 체크 후 이미 담긴 상품인지 확인 */

function login_check(){
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
            product_check();
            } // else if
        }, // success
        error : function (){
            alert("로그인 체크 오류");
        }
    }); // ajax
} // 로그인 체크

function product_check(){
$.ajax({
    url: "/user1/product_check",
        type: "POST",
        dataType : "JSON",
        data: {"user_id" : $(user_id).val(),
        "product_number" : $(product_number).val()},
        success: function (data) {
            if(data == 0){
                songTest();;
            } else if (data > 0) {
                modal_f("이미 담긴 상품입니다.");
            } // else if
         }, // success
         error: function(){
            console.log("실패");
         } // error
    }); // ajax
} // product_check

function songTest(){
    // 장바구니에 담기
    $.ajax({
        url: "/order/cartInsert",
            type: "POST",
            dataType : "JSON",
            data: {
            "user_id" : $(user_id).val(),
            "product_number" : $(product_number).val(),
            "product_count" : $(product_count).val()
            }, // data
            success: function (data) {
//              modal_f("장바구니에 상품을 담았습니다.");
               if(data == 1){
                modal_f("장바구니에 상품을 담았습니다.");
               } else {
                modal_f("장바구니에 상품을 담지 못했습니다.");
               }
             }, // success
             error: function(){
                modal_f("카트에 담기 오류");
             } // error
        }); // ajax
} // songTest

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
    // 장바구니에 담기
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

/* ===================== SNS 공유하기 ==================== */

const share = innerbox2.querySelector('#share'),
    SNS = document.querySelector('.SNS_container'),
    SNS_Box = SNS.querySelector('.SNS_Box'),
    SNS_closeBtn = SNS_Box.querySelector('.SNS_closeBtn'),
    navv = document.querySelector('nav');

share.addEventListener('click', () => {

    modal_s();
});

const SNS_open = () => {
    SNS.classList.remove('hidden');
    bodyy.classList.add('scroll_none');
    headerr.style.position = 'static';
    navv.style.zIndex = '0';
}

const SNS_close = () => {
    SNS.classList.add('hidden');
    bodyy.classList.remove('scroll_none');
    headerr.style.position = 'sticky';
    navv.style.zIndex = '2';
}

function modal_s() {
    SNS_open();
}

SNS.addEventListener('click', function (e) {
    if (e.target.closest('button')) {
        SNS_close();
    }
});

// 상품 수량에 따라 가격 바뀌게

const amount = document.getElementById('inputs'),
      total_amount = innerbox2.querySelector('#total_amount'),
      product_price = innerbox2.querySelector('.product_price'),
      count = document.getElementById("product_count");

amount.addEventListener('click', function (e) {
    total_amount.children[1].textContent = `${e.target.value * product_price.childNodes[1].textContent / 1000},000`;
    console.log(count.value);
    console.log(e.target.value);
})
