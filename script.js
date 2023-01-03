function showForm() {
    document.querySelector('#form').style.display = 'block'
}

function IsEmpty() {
    if (document.forms['form1'].firstname.value === "" 
    || document.forms['form1'].city.value === "" 
    || document.forms['form1'].address.value === ""
    || document.forms['form1'].cardnumber.value === ""
    || document.forms['form1'].expmonth.value === ""
    || document.forms['form1'].expyear.value === ""
    || document.forms['form1'].cvv.value === ""
    || document.forms['form1'].quant.value === "") {
        alert('Add content to empty fields')
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
  
