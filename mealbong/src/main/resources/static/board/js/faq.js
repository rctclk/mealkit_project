const content = document.querySelector('.content'),
    content_faq_Box = content.querySelector('.content_faq_Box'),
    content_faq_answer = content.querySelectorAll('.content_faq_answer'),
    faq_list_Box = content.querySelectorAll('.faq_list_Box'),
    content_faq = content.querySelector('.content_faq');

let current = content_faq_answer[0];

content_faq_Box.addEventListener("click", function (e) {

    let oj = e.target.closest('.faq_list_Box');
    if (this.contains(oj)) {

        if (oj.children[1].classList.contains('hidden')) {
            current.classList.add('hidden')
            oj.children[1].classList.remove('hidden');
        } else {
            oj.children[1].classList.add('hidden');
        }
        current = oj.children[1];
    }
})
//
let currentList = content_faq.children[0];
//


//
// for (let i = 0; i < faq_list_Box.length; i++) {
//     if (faq_list_Box[i].children[0].children[0].textContent == oj.textContent) {
//         faq_list_Box[i].classList.remove('hidden')
//     } else if (oj.textContent == '전체') {
//         faq_list_Box[i].classList.remove('hidden')
//     } else {
//         faq_list_Box[i].classList.add('hidden')
//     }
// }
//
// oj.classList.add('click_faq_list')
// currentList = oj;


content_faq.addEventListener('click', function (e) {

    if (e.target.className != "content_faq") {
        current.classList.add('hidden');
        currentList.classList.remove('click_faq_list')
        let oj = e.target;
        oj.classList.add('click_faq_list')
        currentList = oj;
        location.href = `/faq/list?faq_code=${oj.dataset.code}`;
    }
});



const urlParams = new URL(location.href).searchParams;
let name = urlParams.get('faq_code');
let faq_code = document.querySelectorAll('.content_faq div');

window.addEventListener('load', function (e) {
    console.log(name);

    switch (name) {
        case 'ALL' :
            faq_code[0].classList.add('click_faq_list')
            break;

        case 'F_01' :
            faq_code[1].classList.add('click_faq_list')
            break;

        case 'F_02' :
            faq_code[2].classList.add('click_faq_list')
            break;
        case 'F_03' :
            faq_code[3].classList.add('click_faq_list')
            break;
        case 'F_04' :
            faq_code[4].classList.add('click_faq_list')
            break;
        case 'F_05' :
            faq_code[5].classList.add('click_faq_list')
            break;
        case 'F_06' :
            faq_code[6].classList.add('click_faq_list')
            break;
        case 'F_07' :
            faq_code[7].classList.add('click_faq_list')
            break;
    }
});


