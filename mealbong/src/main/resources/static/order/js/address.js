const new_address_button = document.querySelector(".new_address_button"),
    content = document.querySelector(".content"),
    address_fix_content = document.querySelector('.address_fix_content'),
    address_fix_button = address_fix_content.querySelector('.address_fix_button'),
    [fix_check, fix_cancel] = address_fix_button.querySelectorAll('button'),
    content_address_box = content.querySelector(".content_address_box"),
    address_add_content = document.querySelector('.address_add_content'),
    content_address = content.querySelector(".content_address"),
    address_add_button = address_add_content.querySelector('.address_add_button'),
    [add_check, add_cancel] = address_add_button.querySelectorAll('button'),
    fixBtn = content_address_box.getElementsByTagName('button');



content_address.addEventListener('click', function (e) {

    // console.log(e.target.closest("input").value);
    if (e.target.closest('button')) {
        e.preventDefault();
        address_fix_content.classList.remove('hidden');
        document.querySelector('.fix_number1').value = e.target.getAttribute("data-number");
        document.querySelector('.fix_number2').value = e.target.getAttribute("data-number");

        document.querySelector('.fix_address1').value = e.target.getAttribute("data-add1");
        document.querySelector('.fix_address2').value = e.target.getAttribute("data-add2");
        document.querySelector('.fix_name').value = e.target.getAttribute("data-name");
        document.querySelector('.fix_phone').value = e.target.getAttribute("data-phone");
    }
})

// fixBtn.addEventListener('click', function () {
//     address_fix_content.classList.add('hidden');
// })

fix_check.addEventListener('click', function () {
    address_fix_content.classList.add('hidden');
})

fix_cancel.addEventListener('click', function () {
    address_fix_content.classList.add('hidden');
})

add_check.addEventListener('click', function () {
    address_add_content.classList.add('hidden');
})

add_cancel.addEventListener('click', function () {
    address_add_content.classList.add('hidden');
})

document.querySelector(".new_address_button").addEventListener('click', function () {
    var width = 500;
    var height = 600;

    new daum.Postcode({
        width: width,
        height: height,
        oncomplete: function (data) {
            document.getElementsByClassName('add_zonecode')[0].value = data.zonecode;
            document.getElementsByClassName('add_address1')[0].value = data.address;
            address_add_content.classList.remove('hidden');
        },
    }).open({
        left: (window.screen.width / 2) - (width / 2),
        top: (window.screen.height / 2) - (height / 2)
    });
})


const radios = document.querySelectorAll("input[name=dely_check]");
radios.forEach((radio) => {
    radio.addEventListener("change", function () {
        radios.forEach((r) => r.value = r.checked ? "Y" : "N");
    });
});

function submitForm() {
    document.getElementById("dely_default").submit();
}
function submitDelete(){
    document.getElementById("delyDelete").submit();
}

function submitUpdate(){
    document.getElementById("delyUpdate").submit();
}