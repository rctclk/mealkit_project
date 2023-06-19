'use strict';

let prodeleteModal = document.querySelector('.mainModal'),
    prodeleteBody = document.querySelector('body'),
    prodeleteNav = document.querySelector('nav'),
    prodeleteButton = prodeleteModal.querySelectorAll('.closeBtn'),
    prodeleteBg = prodeleteModal.querySelector('.bg');

const prodeleteOpen = () => {
    prodeleteModal.classList.remove('hidden');
    prodeleteBody.classList.add('scroll_none');
    prodeleteNav.style.position = 'static';
    prodeleteNav.style.zIndex = '0';
}

const prodeleteClose = () => {
    prodeleteModal.classList.add('hidden');
    prodeleteBody.classList.remove('scroll_none');
    prodeleteNav.style.position = 'sticky';
    prodeleteNav.style.zIndex = '2';
}


// 글 삭제 모달
function deleteClick(e) {
    console.log(e);
    prodeleteOpen();

     prodeleteButton[0].addEventListener("click",function (){
        $.ajax({
                url: '/product/productDelete?product_number=' + e,
                type: 'POST',
                data: {
                    'product_number': e
                },
                success: function (data) {
                    console.log("제발");
                    window.location.href = '/admin/productadmin';
                },
                error: function () {
                    console.log("에러");
                }
            }
        )
    })
}

prodeleteBg.addEventListener('click', prodeleteClose);
prodeleteButton[1].addEventListener('click', prodeleteClose);