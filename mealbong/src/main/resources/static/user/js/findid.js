'use strict';

const main = document.querySelector('main'),
  findBtn = main.querySelector('.formButton'),
  uname_input = document.getElementById('uname'),
  phone_input = document.getElementById('phone'),
  span_btn = main.querySelector('.spanbutton'),
  formdiv3 = main.querySelector('.formdiv3'),
  findNum_input = document.getElementById('findNum'),
  find_form = main.querySelector('form'),
  retryBtn = main.querySelector('.retryBtn');

// ======모달참조
const modal = main.querySelector('.modal_container'),
  bg = main.querySelector('.bg'),
  body = document.querySelector('body'),
  header = document.querySelector('header'),
  modal_p = modal.querySelector('p'),
  closeBtn = main.querySelector('.closeBtn');


findBtn.style.cursor = "default";

let btn_flag = true;

function findBtn_confirm() {
  if (btn_flag) {

    uname_input.setAttribute('placeholder', `${uname_input.value}`);
    uname_input.style.color = "gray";
    uname_input.setAttribute('readonly', '');

    phone_input.setAttribute('placeholder', `${phone_input.value}`);
    phone_input.style.color = "gray";
    phone_input.value = phone_input.value.replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);
    phone_input.setAttribute('readonly', '');
    modal_f("인증번호가 발송되었습니다. 인증번호를 입력해 주세요.");

    span_btn.textContent = "확인";
    findBtn.setAttribute('disabled', '');
    findBtn.style.cursor = "default";
    findBtn.style.backgroundColor = "rgba(128, 128, 128, 0.317)";
    formdiv3.classList.remove('formdiv_hidden');

    btn_flag = !btn_flag;

  } else {
    if (findNum_input.value != "1234567") {
      modal_f("인증번호가 일치하지 않습니다.");
      findBtn.setAttribute('type', 'button');
    }
  }
}

// findbtin_confrim 함수 else 에다가 버튼 서브밋 바꾸고 폼태그 링크 findsubmit 페이지로 이동하게
// else 조건식에다 인증번호1234567 일대 실행하게 하고 다른번호 입력하면 모달창에 잘못입력 문구 뜨기


// 인증번호받기 버튼
findBtn.addEventListener('click', () => {
  findBtn_confirm();
});

function nmph_input(iff) {
  if(btn_flag) {
    if (iff) {
      
      findBtn.style.background = "lightSalmon";
      findBtn.style.cursor = "pointer";
      findBtn.removeAttribute('disabled');
    } else {
      
      findBtn.style.background = "rgba(128, 128, 128, 0.317)";
      findBtn.style.cursor = "default";
      findBtn.setAttribute('disabled', '');
    }
  }
}

function nmph_input2(iff) {
  if (iff) {
 
    findBtn.style.background = "lightSalmon";
    findBtn.style.cursor = "pointer";
    findBtn.removeAttribute('disabled');
  } else {

    findBtn.style.background = "rgba(128, 128, 128, 0.317)";
    findBtn.style.cursor = "default";
    findBtn.setAttribute('disabled', '');
  }
}

phone_input.addEventListener('keydown', () => {
  setTimeout(() => {
    nmph_input(uname_input.value && phone_input.value.length >= 11);
  }, 50);

});

uname_input.addEventListener('keydown', () => {

  setTimeout(() => {
    nmph_input(uname_input.value && phone_input.value.length >= 11);
  }, 50);

});

findNum_input.addEventListener('keydown', () => {
  setTimeout(() => {
    if (findNum_input.value.length >= 7) {
      findBtn.setAttribute('type' , 'submit');
    } else {
      findBtn.setAttribute('type', 'button');
    }
    nmph_input2(findNum_input.value.length >= 7);
  }, 50);
})

find_form.addEventListener('keydown', (e) => {
  if (!(findBtn.hasAttribute('disabled'))) {
    
    if (e.key === 'Enter') {
      setTimeout(() => {
        findBtn.click();
      },50);
    }
  }
});

// ====재발송버튼
retryBtn.addEventListener('click', () => {
  findBtn.style.background = "rgba(128, 128, 128, 0.317)";
    findBtn.style.cursor = "default";
    findBtn.setAttribute('disabled', '');
  findNum_input.value = '';
  modal_f("인증번호가 발송되었습니다. 인증번호를 입력해 주세요.");

})

// ============================modal

const nav = document.querySelector('nav');

const open = () => {
  modal.classList.remove('hidden');
  body.classList.add('scroll_none');
  header.style.position = 'static';
  nav.style.zIndex = '0';
}

const close = () => {
  modal.classList.add('hidden');
  body.classList.remove('scroll_none');
  header.style.position = 'sticky';
  nav.style.zIndex = '2';
}

function modal_f(str) {
  open();
  modal_p.textContent = str;
}

closeBtn.addEventListener('click', close);
bg.addEventListener('click', close);