const content = document.querySelector('.content'),
    content_notice = content.querySelector('.content_notice'),
    notice_list_content = content.querySelectorAll('.notice_list_content'),
    notice_list_Box = content.querySelectorAll('.notice_list_Box'),
    notice_list_btn = content.querySelector('.notice_list_btn'),
    list_button = notice_list_btn.querySelectorAll('button');

let current = notice_list_content[0];
let next;

content_notice.addEventListener("click", function (e) {

    let oj = e.target.closest('.notice_list_Box');
    if (this.contains(oj)) {

        if (oj.children[1].classList.contains('hidden')) {
            current.classList.add('hidden')
            oj.children[1].classList.remove('hidden');
        }
        else {
            oj.children[1].classList.add('hidden');
        }
        current = oj.children[1];
    }
})

let currentBtn = list_button[0];


notice_list_btn.addEventListener('click', function (e) {
    let oj = e.target.closest('button')

    if (this.contains(oj)) {

        currentBtn.style.opacity = '0.5';

        for (let i = 0; i < notice_list_Box.length; i++) {
            notice_list_Box[i].classList.add('hidden');
        }

        oj.style.opacity = '1';

        currentBtn = oj;

        for (let i = oj.textContent * 10 - 10; i < ((notice_list_Box.length / oj.textContent * 10 > 1) ? (oj.textContent * 10) : ((oj.textContent * 10) - (10 - notice_list_Box.length % 10))); i++) {
            notice_list_Box[i].classList.remove('hidden');
        }
    }
})