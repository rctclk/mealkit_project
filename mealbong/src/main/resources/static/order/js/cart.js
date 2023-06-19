'use strict';

const main = document.querySelector('main'),
    btn_addSpan = main.querySelectorAll('.btn_addSpan'),
    div1_span = main.getElementsByClassName('div1_span'),
    btn_plus = main.querySelectorAll('.btn_plus'),
    btn_minus = main.querySelectorAll('.btn_minus'),
    price_value = main.querySelectorAll('.price_value'),
    total_price = main.querySelector('.total_price'),
    total_price2 = main.querySelector('.total_price2'),
    cart_div1 = main.querySelector('.cart_div1'),
    btn_addBox = main.getElementsByClassName('btn_addBox'),
    div1_sub = main.getElementsByClassName('div1_sub'),
    del_fee = main.querySelector('.del_fee'),
    select_value1 = main.querySelector('.select_value1'),
    select_value2 = main.querySelector('.select_value2'),
    All_div = main.querySelector('.All_div'),
    cart_submitBtn = main.querySelector('.cart_submitBtn'),
    c_number = main.querySelectorAll('.c_number'),
    test_btn = document.getElementById('test_btn'),
    test_btn2 = document.getElementById('test_btn2'),
    order_form = document.getElementById('order_form'),
    total_value = document.getElementById('total_value'),
    cNum_div = document.getElementById('cNum_div');


// setTimeout(()=>{
//      div1_sub = main.querySelectorAll('.div1_sub');
// },5000);

// ======모달참조
const modal = document.querySelector('.modal_container'),
    bg = document.querySelector('.bg'),
    body = document.querySelector('body'),
    header = document.querySelector('header'),
    modal_p = modal.querySelector('p'),
    closeBtn = document.querySelector('.closeBtn'),
    modal_confirm = document.querySelector('.modal_confirm');

// ====선택체크박스
const selectAll_box = main.querySelector('.selectAll_box'),
    select_box = main.querySelectorAll('.select_box');

 let select_flag = true;
let cart_number = 0;
All_div.addEventListener('click', () => {
     select_flag = !select_flag;
    let sum = 0;
    // let iff = +select_box[0].dataset.flag && +select_box[1].dataset.flag && +select_box[2].dataset.flag && +select_box[3].dataset.flag;
    if (+select_value1.textContent != +select_value2.textContent) {
        selectAll_box.style.backgroundImage = "url(../../image/check.png)";
        for (let i = 0; i < select_box.length; i++) {
            select_box[i].style.backgroundImage = "url(../../image/check.png)";
            sum += +div1_span[i].textContent;
            select_box[i].dataset.flag = 1;
        }

        select_value1.textContent = select_value2.textContent;
        total_price.textContent = sum + 3000;
        total_price2.textContent = sum;
        del_fee.textContent = "3000";
        cart_submitBtn.style.background = "lightSalmon";
        cart_submitBtn.style.cursor = "pointer";
       // cart_submitBtn.setAttribute('type', 'submit');
        cart_submitBtn.removeAttribute('disabled');
    } else {
        selectAll_box.style.backgroundImage = "url(../../image/check2.png)";
        for (let i = 0; i < select_box.length; i++) {
            select_box[i].style.backgroundImage = "url(../../image/check2.png)";
            select_box[i].dataset.flag = 0;
        }
        del_fee.textContent = "0";
        total_price.textContent = "0";
        total_price2.textContent = "0";
        select_value1.textContent = "0";
        cart_submitBtn.style.backgroundColor = "#9f9d9d";
        cart_submitBtn.style.cursor = "default";
        cart_submitBtn.setAttribute('type', 'button');
        cart_submitBtn.setAttribute('disabled', '');
    }
});



for (let i = 0; i < div1_span.length; i++) {
    btn_addBox[i].dataset.idx = i;
}
for (let i = 0; i < select_box.length; i++) {
    select_box[i].dataset.flag = 1;
}


//   ======장바구니목록 이벤위임
btn_addSpan[0].dataset.idx = 1;
let cnt = 0;
let value, tot, tot2, idx, val;

function cart_update(dir,cart_number) {
    $.ajax({
        url:"/order/cart_update",
        type: "POST",
        data: {"dir" : dir,
                "cart_number" : cart_number},
        success: function(data) {
            console.log(data);
        }
    });

}

cart_div1.addEventListener('click', (e) => {
    const pick = e.target;
    let dir = 0;
    idx = e.target.parentNode.dataset.idx;
    if (pick.closest('button')) {
            cart_number = pick.parentNode.getAttribute("value");
        console.log(cart_number);
        if (pick.classList.contains('btn_plus')) {
            dir = 1;
            cart_update(dir,cart_number);
            setTimeout(() => {

                if (+btn_addSpan[idx].textContent > 1) {
                    btn_minus[idx].style.opacity = 1;
                    btn_minus[idx].removeAttribute('disabled');
                    btn_minus[idx].style.cursor = "pointer";
                } else {
                    btn_minus[idx].style.opacity = .5;
                    btn_minus[idx].setAttribute('disabled', '');
                    btn_minus[idx].style.cursor = "default";
                }
            }, 50);
            btn_addSpan[idx].textContent = +btn_addSpan[idx].textContent + 1;
            value = btn_addSpan[idx].textContent;
            tot = +total_price.textContent;
            tot2 = +total_price2.textContent;
            div1_span[idx].textContent = (+price_value[idx].textContent) * value;
            if (+select_box[idx].dataset.flag) {
                tot = tot + +price_value[idx].textContent;
                tot2 = tot2 + +price_value[idx].textContent;
                total_price.textContent = tot;
                total_price2.textContent = tot2;
            }

            // console.log(e.target)
        }
        if (pick.classList.contains('btn_minus')) {
            dir = 0;
            cart_update(dir,cart_number);
            setTimeout(() => {

                if (+btn_addSpan[idx].textContent > 1) {
                    btn_minus[idx].style.opacity = 1;
                    btn_minus[idx].removeAttribute('disabled');
                    btn_minus[idx].style.cursor = "pointer";
                } else {
                    btn_minus[idx].style.opacity = .5;
                    btn_minus[idx].setAttribute('disabled', '');
                    btn_minus[idx].style.cursor = "default";
                }
            }, 50);
            btn_addSpan[idx].textContent = +btn_addSpan[idx].textContent - 1;
            value = btn_addSpan[idx].textContent;
            tot = +total_price.textContent;
            tot2 = +total_price2.textContent;
            div1_span[idx].textContent = (+price_value[idx].textContent) * value;
            if (+select_box[idx].dataset.flag) {

                tot = tot - +price_value[idx].textContent;
                tot2 = tot2 - +price_value[idx].textContent;
                total_price.textContent = tot;
                total_price2.textContent = tot2;
            }

        }
    }

    if (pick.classList.contains('close_btn')) {
        cart_number = +pick.childNodes[3].textContent;
        console.log(cart_number);
        modal_f('삭제하시겠습니까?');
        idx = +pick.parentNode.previousSibling.previousSibling.dataset.idx;
    }

    if (pick.classList.contains('select_box')) {

        idx = +pick.parentNode.nextSibling.nextSibling.dataset.idx;
        if (+select_box[idx].dataset.flag) {

            value = +btn_addSpan[idx].textContent;
            tot = +total_price.textContent;
            tot2 = +total_price2.textContent;
            div1_span[idx].textContent = (+price_value[idx].textContent) * value;
            tot = tot - +div1_span[idx].textContent;
            tot2 = tot2 - +div1_span[idx].textContent;
            total_price.textContent = tot;
            total_price2.textContent = tot2;
            val = +select_value1.textContent;
            select_value1.textContent = val - 1;
            select_box[idx].dataset.flag = 0;

            if (select_value1.textContent == 0) {
                del_fee.textContent = "0";
                total_price.textContent = "0";
                selectAll_box.style.backgroundImage = "url(../../image/check2.png)";

                cart_submitBtn.style.backgroundColor = "#9f9d9d";
                cart_submitBtn.style.cursor = "default";
                cart_submitBtn.setAttribute('type', 'button');
                cart_submitBtn.setAttribute('disabled', '');

                // select_flag = false;

            } else {
                //cart_submitBtn.setAttribute('type', 'submit');
                cart_submitBtn.removeAttribute('disabled');
            }

            if (select_value1.textContent != select_value2.textContent) {
                selectAll_box.style.backgroundImage = "url(../../image/check2.png)";
            }

            select_box[idx].style.backgroundImage = "url(../../image/check2.png)";
        } else {
            val = +select_value1.textContent;
            select_value1.textContent = val + 1;
            if (select_value1.textContent == 1) {
                del_fee.textContent = "3000";
                selectAll_box.style.backgroundImage = "url(../../image/check.png)";
                // select_flag = true;
                total_price.textContent = "3000";
                cart_submitBtn.style.background = "lightSalmon";
                cart_submitBtn.style.cursor = "pointer";
                //cart_submitBtn.setAttribute('type', 'submit');
                cart_submitBtn.removeAttribute('disabled');
            }
            value = +btn_addSpan[idx].textContent;
            tot = +total_price.textContent;
            tot2 = +total_price2.textContent;
            div1_span[idx].textContent = (+price_value[idx].textContent) * value;
            tot = tot + +div1_span[idx].textContent;
            tot2 = tot2 + +div1_span[idx].textContent;
            total_price.textContent = tot;
            total_price2.textContent = tot2;
            select_box[idx].dataset.flag = 1;

            if (select_value1.textContent == select_value2.textContent) {
                selectAll_box.style.backgroundImage = "url(../../image/check.png)";
            } else {
                selectAll_box.style.backgroundImage = "url(../../image/check2.png)";
            }


            select_box[idx].style.backgroundImage = "url(../../image/check.png)";

        }

    }

});
// 클로즈버튼 모달창

modal_confirm.addEventListener('click',() =>{
    
    cnt++;
    value = +btn_addSpan[idx].textContent;
    tot = +total_price.textContent;
    tot2 = +total_price2.textContent;
    div1_span[idx].textContent = (+price_value[idx].textContent) * value;

    if (+select_box[idx].dataset.flag) {

        tot = tot - +div1_span[idx].textContent;
        tot2 = tot2 - +div1_span[idx].textContent;
        total_price.textContent = tot;
        total_price2.textContent = tot2;
        val = +select_value1.textContent;
        select_value1.textContent = val - 1;
    }

    val = +select_value2.textContent;
    select_value2.textContent = val - 1;
    div1_span[idx].textContent = "0";

    if (select_value1.textContent == select_value2.textContent) {
        selectAll_box.style.backgroundImage = "url(../../image/check.png)";
    }
    if (select_value1.textContent != select_value2.textContent) {
        selectAll_box.style.backgroundImage = "url(../../image/check2.png)";
    }


    if (select_value2.textContent == "0") {
        del_fee.textContent = "0";
        total_price.textContent = "0";
        selectAll_box.style.backgroundImage = "url(../../image/check2.png)";
        selectAll_box.setAttribute('disabled', '');
    }

    if (select_value1.textContent == "0") {
        del_fee.textContent = "0";
        total_price.textContent = "0";
        selectAll_box.style.backgroundImage = "url(../../image/check2.png)";
        cart_submitBtn.style.backgroundColor = "#9f9d9d";
        cart_submitBtn.style.cursor = "default";
        cart_submitBtn.setAttribute('type', 'button');
        cart_submitBtn.setAttribute('disabled', '');
    }
    div1_sub[idx].classList.add('cart_hidden');
    cart_ajax();
    //c_number.click();
    //cart_ax();
    close();
});
//=============ajax
function cart_ajax() {
    console.log(cart_number);
    $.ajax({
       url: "/order/cart_delete",
       type : "POST",
        data : {"cart_number" : cart_number},
        success: function(data) {
            self.location.href='/order/cart';
        }
    });
}




// ================배송지변경

const address_btn = main.querySelector(".address_btn");


address_btn.addEventListener('click', function () {
    var width = 500;
    var height = 600;
    new daum.Postcode({
        width: width,
        height: height
    }).open({
        left: (window.screen.width / 2) - (width / 2),
        top: (window.screen.height / 2) - (height / 2)
    });
});

// ============================modal

const nav = document.querySelector('nav');

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

let arr = new Array();
let arr2 = new Array();
    let cart_array = new Array();
test_btn.addEventListener('click',() =>{
    for(let i = 0; i < div1_sub.length; i++) {
        if(div1_sub[i].childNodes[1].childNodes[1].getAttribute('data-flag') == "1") {
            c_number[i].setAttribute("value" , "Y");
        }
    }


    for(let i = 0; i < c_number.length;i++) {
        if(c_number[i].getAttribute("value")=="Y") {
            arr.push(c_number[i].textContent);
            arr2.push(btn_addSpan[i].textContent);
        }
    }

    for(let i =0; i<arr.length; i++) {
        cart_array.push('<input type="hidden" name="cart_numberV" value="'+arr[i]+'">');
        cart_array.push('<input type="hidden" name="product_countV" value="'+arr2[i]+'">');
    }
         // order_form.innerHTML = '<input type="hidden" name="o_value" value="'+arr[i]+'">';
          order_form.innerHTML = cart_array.join('');
    order_form.appendChild(total_value);
order_form.submit();

});


// 장바구니 ajax
// 좋아요 -> 장바구니로 list 이동
// function savetoCart() {
//
//     let items = [];
//     const checkboxes = document.querySelectorAll('input[name="agreeCheck"]:checked');
//     checkboxes.forEach((checkbox) => {
//         items.push(checkbox.value);
//     });
//
//     $.ajax({
//         type: "POST",
//         url: '/user/cart/',
//         cache: false,
//         contentType: "application/json",
//         data: JSON.stringify(items),
//         success: function(result) {
//             if (result.success) {
//                 if(confirm(result.message)) {
//                     window.location.href = '/user/cart';
//                 }
//             } else {
//                 alert(result.message);
//             }
//         },
//         error: function(xhr) {
//             alert('저장에 실패하였습니다. 다시 시도해주세요.');
//         }
//     });
// }


      // btn_plus.addEventListener('click', () => {
      //   let value,tot,tot2;
      //   setTimeout(() => {
      //
      //       if (+btn_addSpan.textContent > 1) {
      //           btn_minus.style.opacity = 1;
      //           btn_minus.removeAttribute('disabled');
      //           btn_minus.style.cursor = "pointer";
      //       } else {
      //           btn_minus.style.opacity = .5;
      //           btn_minus.setAttribute('disabled', '');
      //           btn_minus.style.cursor = "default";
      //       }
      //   },50);
      //     btn_addSpan.textContent = +btn_addSpan.textContent + 1;
      //     value = btn_addSpan.textContent;
      //     tot = +total_price.textContent;
      //     tot2 = +total_price2.textContent;
      //     div1_span[2].textContent = (+price_value.textContent) * value;
      //     tot = tot + +price_value.textContent;
      //     tot2 = tot2 + +price_value.textContent;
      //     total_price.textContent = tot;
      //     total_price2.textContent = tot2;
      // });
      //
      // btn_minus.addEventListener('click', () => {
      //   let value,tot,tot2;
      //   setTimeout(() => {
      //
      //       if (+btn_addSpan.textContent > 1) {
      //           btn_minus.style.opacity = 1;
      //           btn_minus.removeAttribute('disabled');
      //           btn_minus.style.cursor = "pointer";
      //       } else {
      //           btn_minus.style.opacity = .5;
      //           btn_minus.setAttribute('disabled', '');
      //           btn_minus.style.cursor = "default";
      //       }
      //   },50);
      //     btn_addSpan.textContent = +btn_addSpan.textContent - 1;
      //     value = btn_addSpan.textContent;
      //     tot = +total_price.textContent;
      //     tot2 = +total_price2.textContent;
      //     div1_span[2].textContent = (+price_value.textContent) * value;
      //     tot = tot - +price_value.textContent;
      //     tot2 = tot2 - +price_value.textContent;
      //
      //     total_price.textContent = tot;
      //     total_price2.textContent = tot2;
      // })



