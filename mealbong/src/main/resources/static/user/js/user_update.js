'use strict';

const main = document.querySelector('main'),
    upw = document.getElementById('upw'),
    upw2 = document.getElementById('upw2'),
    user_id = document.getElementById('user_id'),
    phone_num = document.getElementById('phone_num'),
    emailCheck = main.querySelector('.emailCheck'),
    phoneCheck = main.querySelector('.phoneCheck'),
    checkBtn4 = main.querySelector('.checkBtn4'),
    Btn4_box = main.querySelector('.Btn4_box'),
    button_submit = main.querySelector('.button_submit'),
    uname = document.getElementById('uname'),
    addressbutton = document.querySelector('.addressbutton'),
    account_p = main.querySelector('.account_p'),
    account_p2 = main.querySelector('.account_p2'),
    address_input = document.getElementById('address_input'),
    delete_btn = main.querySelector('.delete_btn'),
    update_btn = main.querySelector('.update_btn'),
    user_password3 = document.getElementById('user_password3'),
    delete_submit = document.querySelector('.delete_submit'),
    update_submit = document.querySelector('.update_submit'),
    user_email = document.getElementById('user_email'),
    user_phone = document.getElementById('user_phone'),
    // test_btn = document.getElementById('test_btn'),
    gender_div = document.getElementById('gender_div');

   let userZip = main.querySelector('.userZip');
   let user_email_val = user_email.value;
   let user_phone_val = user_phone.value;



// ======모달참조
const modal = main.querySelector('.modal_container'),
    bg = main.querySelector('.bg'),
    body = document.querySelector('body'),
    header = document.querySelector('header'),
    modal_p = modal.querySelector('p'),
    closeBtn = main.querySelector('.closeBtn');
//
// // ==========정규식
//
// // const regex = /^[a-zA-Z0-9]{4,12}$/
 const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,16}$/;
 // const regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{10,20}$/;
 const regPass = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*+=-])(?=.*[0-9]).{5,20}$/;
 const regMail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
//
// // ===================================================
//
//
let clr1,clr2,clr3;
// checkBtn1.addEventListener('click', () => {
//     const result = regex.test(uid.value);
//
//     if (result) {
//         modal_f("사용할 수 있는 아이디 입니다");
//         clr1 = true;
//     }
//     else {
//         modal_f("6자 이상 16자 이하의 영문 혹은 영문과 숫자를 조합");
//     }
//
// });
//
// uid.addEventListener('keydown', () => {
//     setTimeout(() => {
//         if (clr1) {
//             clr1 = false;
//         }
//     }, 50)
// });
//
// umail.addEventListener('keydown',() => {
//
//     setTimeout(() => {
//         if (clr2) {
//             clr2 = false;
//         }
//     }, 50)
// });
//
// phone.addEventListener('keydown', ()=> {
//     setTimeout(()=>{
//         if(clr3) {
//             clr3 = false;
//         }
//     },50)
// })
//
// upw.addEventListener('keydown', () => {
//     setTimeout(()=>{
//         const result = regPass.test(upw.value);
//         upw_input(account_p,result);
//
//
//     },50)
// });
//
// upw2.addEventListener('keydown', () => {
//     setTimeout(()=>{
//         const check = upw.value == upw2.value
//         upw_input(account_p2,check);
//
//
//     },50)
// });
//
// function upw_input(zz,iff) {
//     if (iff) {
//         zz.classList.add('account_hidden');
//     } else {
//         zz.classList.remove('account_hidden');
//     }
// }
//
// checkBtn2.addEventListener('click', () => {
//     const result = regMail.test(umail.value);
//
//     if (result) {
//         modal_f("사용할 수 있는 이메일 입니다");
//         clr2 = true;
//     } else if (umail.value == "") {
//         modal_f("이메일을 입력해 주세요")
//     }
//     else {
//         modal_f("이메일 형식으로 입력해 주세요");
//     }
//
// });
//
// phone.addEventListener('keydown',() => {
//     setTimeout(() => {
//         nmph_input(checkBtn3,phone.value.length >= 11);
//     }, 50);
// } );
//
// function nmph_input(zz,iff) {
//     if (iff) {
//
//         zz.style.background = "lightSalmon";
//         zz.style.cursor = "pointer";
//         zz.removeAttribute('disabled');
//         zz.classList.remove('button_opacity');
//     } else {
//
//         zz.classList.add('button_opacity');
//         zz.style.cursor = "default";
//         zz.setAttribute('disabled', '');
//     }
// }
//
// checkBtn3.addEventListener('click', () => {
//     modal_f("인증번호가 발송되었습니다. 인증번호를 입력해 주세요.");
//     Btn4_box.style.display = "flex";
// });
//
// // ======폰번인증
//
// checkBtn4.addEventListener('click', () => {
//     if (phone_num.value == "1234567") {
//         modal_f("인증완료");
//         phone_num.value = "";
//         checkBtn4.classList.add('button_opacity');
//         checkBtn4.style.cursor = "default";
//         checkBtn4.setAttribute('disabled', '');
//         Btn4_box.style.display = "none";
//
//         clr3 = true;
//     } else {
//         modal_f("잘못된 인증코드입니다.");
//     }
// });
//
// phone_num.addEventListener('keydown', () => {
//     setTimeout(() => {
//         nmph_input(checkBtn4,phone_num.value.length >= 7);
//     }, 50);
// });
//
//
// // =====전송버튼
//
// button_submit.addEventListener('click', () => {
//    // const clrCheck = clr1 ==true && clr2 == true && clr3 == true;
//
//     userZip = +userZip;
//     //if(clrCheck && upw.value == upw2.value && uname.value != "" && address_input.value != "") {
//
//     // if(clrCheck && upw.value == upw2.value && uname.value != "" && address_input.value != "") {
//     //    button_submit.setAttribute('type','submit');
//     // } else {
//     //     modal_f("양식을 확인해주세요");
//     // }
//
//      if(idCheck.getAttribute("value") == "Y" && emailCheck.getAttribute("value") == "Y" && phoneCheck.getAttribute("value") == "Y") {
//          button_submit.setAttribute('type','submit');
//      } else {
//          modal_f("중복확인 해주세요");
//      }
// });

// // =======주소검색
//
// // const addressbutton = document.querySelector(".addressbutton");
//
//
// addressbutton.addEventListener('click', function () {
//     var width = 500;
//     var height = 600;
//     new daum.Postcode({
//         width: width,
//         height: height
//     }).open({
//         left: (window.screen.width / 2) - (width / 2),
//         top: (window.screen.height / 2) - (height / 2)
//     });
// })
//
//
// // ==================== 모달
//
const open = () => {
    modal.classList.remove('hidden');
    body.classList.add('scroll_none');
}

const close = () => {
    modal.classList.add('hidden');
    body.classList.remove('scroll_none');
}

function modal_f(str) {
    open();
    modal_p.textContent = str;
}

closeBtn.addEventListener('click', close);
bg.addEventListener('click', close);


//=================추가

function email_check() {
    $.ajax({
        url: "/user1/email_check",
        type: "POST",
        dataType : "JSON",
        data : {"user_email" : $(user_email).val()},
        success : function (data) {
            console.log(data);
            if(data > 0) {
                modal_f("중복된 이메일 입니다.");
            } else if (data == 0) {
                modal_f("사용 가능한 이메일 입니다.");
                emailCheck.classList.add('button_opacity');
                emailCheck.style.cursor = "default";
                emailCheck.setAttribute('disabled', '');
                user_email.setAttribute('readonly','');
                user_email.setAttribute('disabled','');
                $(emailCheck).attr("value","Y");
            }
        }
    });
}

function phone_check() {
    $.ajax({
        url: "/user1/phone_check",
        type: "POST",
        dataType : "JSON",
        data : {"user_phone" : $(user_phone).val()},
        success : function (data) {
            console.log(data);
            if(data > 0) {
                modal_f("중복된 휴대폰 번호 입니다.");
            } else if (data == 0) {
                modal_f("사용 가능한 휴대폰 번호 입니다.");
                phoneCheck.classList.add('button_opacity');
                phoneCheck.style.cursor = "default";
                phoneCheck.setAttribute('disabled', '');
                user_phone.setAttribute('readonly','');
               // user_phone.setAttribute('disabled','');
                $(phoneCheck).attr("value","Y");
            }
        }
    });
}

function pw_check(type) {
    $.ajax({
        url: "/user1/pw_check",
        type: "POST",
        dataType : "JSON",
        data : {"user_password" : $(user_password3).val()},
        success : function (data) {

            console.log(upw.value.length >5 && upw.value == upw2.value);
            if(data>0) {
                modal_f("현재 비밀번호가 틀렸습니다.");
            } else {
                if(type == "delete") {
                delete_submit.click();
                } else if(type == "update") {
                    if(upw.value == "" && upw2.value == "") {
                        if(emailCheck.getAttribute("value") == "Y" && phoneCheck.getAttribute("value") == "Y") {
                        // update_submit.click();
                            user_update();
                        } else {
                            modal_f("중복확인 해주세요");
                        }

                    } else {
                        if(upw.value.length >5 && upw.value == upw2.value) {
                            if(emailCheck.getAttribute("value") == "Y" && phoneCheck.getAttribute("value") == "Y") {
                                // update_submit.click();
                                user_update();
                            } else {
                                modal_f("중복확인 해주세요");
                            }
                        } else {
                            if(upw.value != upw2.value) {
                                modal_f("동일한 비밀번호를 입력해 주세요");
                            } else if (upw.value.length <= 5) {
                                modal_f("6자 이상 입력해 주세요");
                            }
                        }
                    }

                }
                console.log("들어옴??");
            }
        }
    });
}
let user_gender = "unselected";
gender_div.addEventListener('click',(e)=>{
    let pick = e.target;
    // console.log(user_id.value);
    if(pick.classList.contains("genderinput")) {
        user_gender = pick.value;
    }
});

function user_update() {
    // type: "POST",
    //     dataType : "JSON",
    //     data : {"user_password" : $(user_password3).val()},
    // success : function (data) {
    $.ajax({
        url:"/user1",
        type : "PUT",
        data : {
                "user_id" : $(user_id).val(),
                "user_password" : $(upw).val(),
                "user_name" : $(uname).val() ,
                "user_email" : $(user_email).val(),
                "user_phone" : $(user_phone).val(),
                "user_gender" : user_gender
        },
        success : function () {
            self.location.href='/';
        }
    });
}

// test_btn.addEventListener('click',() =>{
//     user_update();
// });

function check_func(zz,iff) {
    if (!iff) {

        zz.style.background = "lightSalmon";
        zz.style.cursor = "pointer";
        zz.removeAttribute('disabled');
        zz.classList.remove('button_opacity');
        zz.setAttribute("value","N");
    } else {

        zz.classList.add('button_opacity');
        zz.style.cursor = "default";
        zz.setAttribute('disabled', '');
        zz.setAttribute("value","Y");
    }
}

emailCheck.classList.add('button_opacity');
emailCheck.style.cursor = "default";
emailCheck.setAttribute('disabled', '');

phoneCheck.classList.add('button_opacity');
phoneCheck.style.cursor = "default";
phoneCheck.setAttribute('disabled', '');

user_email.addEventListener('keydown', ()=>{
   setTimeout(() => {
       check_func(emailCheck,user_email_val == user_email.value);
   },50);
});

user_phone.addEventListener('keydown', ()=>{
   setTimeout(() => {
       check_func(phoneCheck,user_phone_val == user_phone.value);
   },50);
});

emailCheck.addEventListener('click',() =>{
    const result = regMail.test(user_email.value);
    console.log(user_email_val == user_email.value);

    if (result) {
        email_check();
    } else if (user_email.value == "") {
        modal_f("이메일을 입력해 주세요")
    }
    else {
        modal_f("이메일 형식으로 입력해 주세요");
    }
});

phoneCheck.addEventListener('click',() =>{
    if(user_phone.value.length>=11) {
        phone_check();
    } else {
        modal_f("휴대폰 번호를 확인해 주세요");
    }
});

delete_btn.addEventListener('click',() =>{
console.log("들어왓음")
     if (user_password3.value == "") {
         modal_f("비밀번호를 입력해 주세요");
     }
    else {
         pw_check("delete");
    }
});

update_btn.addEventListener('click',() =>{
console.log("들어왓음2")
     if (user_password3.value == "") {
         modal_f("비밀번호를 입력해 주세요")
     }
    else {
         pw_check("update");
    }
});





