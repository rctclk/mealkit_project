const content = document.querySelector('.content'),
    inquiry_box = content.querySelector('.inquiry_box'),
    inquiry_list_content = content.querySelectorAll('.inquiry_list_content'),
    inquiry_list_Box = content.querySelectorAll('.inquiry_list_Box'),
    inquiry_list_btn = content.querySelector('.inquiry_list_btn'),
    inquiry_button = inquiry_list_btn.querySelectorAll('button');

let current = inquiry_list_content[0];
let next;

inquiry_box.addEventListener("click", function (e) {

    let oj = e.target.closest('.inquiry_list_Box');
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

let currentBtn = inquiry_button[0];


inquiry_list_btn.addEventListener('click', function (e) {
    let oj = e.target.closest('button')

    if (this.contains(oj)) {
        current.classList.add('hidden');
        currentBtn.style.opacity = '0.5';

        for (let i = 0; i < inquiry_list_Box.length; i++) {
            inquiry_list_Box[i].classList.add('hidden');
        }

        oj.style.opacity = '1';

        currentBtn = oj;

        for (let i = oj.textContent * 10 - 10; i < ((inquiry_list_Box.length / oj.textContent * 10 > 1) ? (oj.textContent * 10) : ((oj.textContent * 10) - (10 - inquiry_list_Box.length % 10))); i++) {
            inquiry_list_Box[i].classList.remove('hidden');
        }
    }
})