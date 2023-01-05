function showForm() {
    document.querySelector('#form').style.display = 'block';
}

function IsEmpty() {
if(document.forms['form1'].name.value === "" 
|| document.forms['form1'].city.value === "" 
|| document.forms['form1'].address.value === ""
|| document.forms['form1'].cardNumber.value === ""
|| document.forms['form1'].expMonth.value === ""
|| document.forms['form1'].expYear.value === ""
|| document.forms['form1'].cvv.value === ""
|| document.forms['form1'].quant.value === "") {
    let messageError = document.querySelector("#result");
    messageError.innerText = "Add content to empty fields";
    return false;
    }
const form = document.getElementById('form');
const formData = new FormData(form);
const output = document.getElementById('output');
for (const [key, value] of formData) {
output.textContent += `${key}: ${value};\n `;
}
    return true;
}
  
function validateName() {
    let name = document.querySelector("#name").value;
    let name2 = document.querySelector("#name");
    let reName = /^([\S]+)\s([\S]+)\s([\S]+)/g;
    
    if(name.trim()==""){
        name2.style.border = "red solid 2px";
    } else if (reName.test(name)){
        name2.style.border = "green solid 2px";
    } else {
        let nameMessageError = document.querySelector("#name__error");
        nameMessageError.innerText = "Wrong name";
    }
}
   
function validateEmail() {
    let email = document.querySelector("#email").value;
    let email2 = document.querySelector("#email");
    let reEmail = /([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})/g;
    
    if(email.trim()==""){
        email2.style.border = "red solid 2px";
    } else if (reEmail.test(email)){
        email2.style.border = "green solid 2px";
    } else {
        let emailMessageError = document.querySelector("#email__error");
        emailMessageError.innerText = "Wrong email";
    }
}

function validatePhone() {
    let phone = document.querySelector("#phone").value;
    let phone2 = document.querySelector("#phone");
    let rePhone = /[0-9]\d{11}/g;
    
    if(phone.trim()==""){
        phone2.style.border = "red solid 2px";
    } else if (rePhone.test(phone)){
        phone2.style.border = "green solid 2px";
    } else {
        let phoneMessageError = document.querySelector("#phone__error");
        phoneMessageError.innerText = "Wrong mobile number";
    }
}