'use strict';

const diva3_button = document.getElementsByClassName('diva3_button'),
      diva3_sub2 = document.querySelector('.diva3_sub_sub2'),
      bank = document.getElementById('bank'),
      card = document.getElementById('card'),
      pay_phone = document.getElementById('pay_phone');


// for (let i = 0; i < div1_span.length; i++) {
//     btn_addBox[i].dataset.idx = i;
// }

      for(let i =0;i < diva3_button.length; i++) {
        diva3_button[i].dataset.idx = i;
      }

// background - color: lightsalmon;
// color: white;
// border: none;

      let bfrIdx = 0;

diva3_button[0].style.backgroundColor = "lightsalmon";
diva3_button[0].style.color = "white";
// console.log(diva3_button[z.dataset.idx].parentNode.parentNode.nextSibling.nextSibling)

         diva3_sub2.addEventListener('click',(e)=> {
            const z = e.target;
             if (z.classList.contains('diva3_button')) {
                 diva3_button[bfrIdx].style.backgroundColor = "";
                 diva3_button[bfrIdx].style.color = "black";
                 diva3_button[bfrIdx].style.border = "none";

                diva3_button[z.dataset.idx].style.backgroundColor = "lightsalmon";
                diva3_button[z.dataset.idx].style.color = "white";
                diva3_button[z.dataset.idx].style.border = "none";


                 if (z.dataset.idx != 0) {
                     diva3_button[z.dataset.idx].parentNode.parentNode.nextSibling.nextSibling.style.display = "none";
                     card.setAttribute('name','void');
                 } else {
                     diva3_button[z.dataset.idx].parentNode.parentNode.nextSibling.nextSibling.style.display = "flex";
                     card.setAttribute('name','payment');
                 }
                 if (z.dataset.idx != 1) {
                     diva3_button[z.dataset.idx].parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "none";
                     bank.setAttribute('name','void');
                 } else {
                     diva3_button[z.dataset.idx].parentNode.parentNode.nextSibling.nextSibling.nextSibling.nextSibling.style.display = "flex";
                     bank.setAttribute('name','payment');
                 }

                 if (z.dataset.idx != 2) {
                     pay_phone.setAttribute('name','void');
                 } else {
                     pay_phone.setAttribute('name','payment');
                 }


                bfrIdx=z.dataset.idx;
             }

         })