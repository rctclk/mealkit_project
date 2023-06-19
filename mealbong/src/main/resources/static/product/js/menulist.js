'use strict'
/* ===================== 상품 리스트 정렬 ==================== */
const innerbox23 = document.getElementById("innerbox23")

let category_title = innerbox23.childNodes[1].textContent,
    category_code;

switch (category_title) {
case "한식" :
category_code = "C_01";
break;
case "중식" :
category_code = "C_02";
break;
case "일식" :
category_code = "C_03";
break;
case "양식" :
category_code = "C_04";
break;
case "분식/야식" :
category_code = "C_05";
break;
case "아시안" :
category_code = "C_06";
break;
}

let orderNo = 0;

function productList_order(orderList) {
orderNo = orderList;
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
                      alert("실패");
        }
      }); //ajax
}


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

productList_order(1);

let currentIdx = 0;

// ===========================================================
// innerbox1, innerbox2 a 태그들 클릭시 색깔
// 테마별, 순위별 a 태그들


let outerbox = document.querySelector('.outerbox'),
    innerbox1 = outerbox.querySelector('.innerbox1'),
    innerbox2 = outerbox.querySelector('.innerbox2'),
    category = innerbox1.querySelectorAll('a'),
    theme = innerbox2.querySelectorAll('a');


const urlParams = new URL(location.href).searchParams;
let name = urlParams.get('category_code');
let aTag = document.querySelectorAll('.innerbox1 a');

window.addEventListener('load', function (){

    switch (name) {
        case 'C_01' :
            aTag[0].style.color = 'lightsalmon';
            aTag[0].style.fontWeight = 'bold';
            break;

        case 'C_02' :
            aTag[1].style.color = 'lightsalmon';
            aTag[1].style.fontWeight = 'bold';
            break;

        case 'C_03' :
            aTag[2].style.color = 'lightsalmon';
            aTag[2].style.fontWeight = 'bold';
            break;
                case 'C_04' :
            aTag[3].style.color = 'lightsalmon';
            aTag[3].style.fontWeight = 'bold';
            break;
                case 'C_05' :
            aTag[4].style.color = 'lightsalmon';
            aTag[4].style.fontWeight = 'bold';
            break;
                case 'C_06' :
            aTag[5].style.color = 'lightsalmon';
            aTag[5].style.fontWeight = 'bold';
            break;
    }
});

innerbox2.addEventListener('click', function (e) {
    let obj = e.target.closest('a');

    if (this.contains(obj)) {
        theme[currentIdx].classList.remove('selected');

        obj.classList.add('selected');

        currentIdx = obj.dataset.direction;
    }
})


