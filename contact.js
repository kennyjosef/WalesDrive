let menu =document.getElementById('menu')
let navBarToggle = document.getElementById('navbar_toggle')
let bars =  document.getElementById('bars')
let close = document.getElementById('close')
let logo =  document.getElementById('logo')



navBarToggle.addEventListener('click', ()=>{
    navBarToggle.classList.add('no_show')
    menu.classList.toggle('active')
    close.classList.toggle('close-times');
    logo.classList.add('logo-inactive');


})
close.addEventListener('click', () => {
    navBarToggle.classList.remove('no_show')
    menu.classList.toggle('active')
    close.classList.toggle('close-times');
    logo.classList.remove('logo-inactive')
})


const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const companyName = document.getElementById('companyName')
const message = document.getElementById('message')
const signUpButton = document.getElementById('signUp');
const errorMessage = document.getElementById('badMessage')
const errorMessage2 = document.getElementById('badMessage2')
const errorMessage3= document.getElementById('badMessage3')
const errorMessage4 = document.getElementById('badMessage4')

function validateFirstName(){
  let fName=firstName.value
  let regExp = /^[^-\s][^0-9][a-zA-Z\s-]+$/ 
  //regular expression without space or number
  // let regExp = /[A-Za-z]|[^0-9]/ regular expression with space but not numbers
  if(regExp.test(fName)){
    errorMessage.innerHTML='valid Input'
    return errorMessage.style.color='green'
  }else{
    errorMessage.innerHTML= 'First name can not be empty or filled with number'
    return errorMessage.style.color='red'
  }
  
}

firstName.addEventListener('keyup', validateFirstName)

function validateLastName(){
  let lName= lastName.value
  let regExp =/^[^-\s][^0-9][a-zA-Z\s-]+$/
  if(regExp.test(lName)){
    errorMessage2.innerHTML='valid Input'
    return errorMessage2.style.color='green'
  }else{
    errorMessage2.innerHTML= 'Last name can not be empty or filled with number'
    return errorMessage2.style.color='red'

  }
}
lastName.addEventListener('keyup', validateLastName)

function validateCompanyName(){
  let cName = companyName.value
  let regExp = /^[^-\s][^0-9][a-zA-Z\s-]+$/
  if (regExp.test(cName)){
    errorMessage3.innerHTML='Valid Input'
    return errorMessage3.style.color="green"
  }else{
    errorMessage3.innerHTML= 'Company name can not be empty or filled with number'
    return errorMessage3.style.color='red'

}
}
companyName.addEventListener('keyup', validateCompanyName)

function validateMessage(){
  let mName = message.value
  if(mName == '' ){
    errorMessage4.innerHTML="Field can not be empty"
    return errorMessage4.style.color ="red"
  }else {
    errorMessage4.innerHTML="Valid Input"
    return errorMessage4.style.color ="green"
  }

}
message.addEventListener('keyup', validateMessage)
signUpButton.addEventListener('click',()=>{
  validateFirstName
  validateLastName
  validateCompanyName
  validateMessage
})














// function validateForm() {
//   let x = document.forms["myForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     return false;
//   }
// }
// function  myFunction(){
//   if (passwd.type === 'password'){
//     passwd.type='text';
//   }else{
//     passwd.type='password'
//   }
// }