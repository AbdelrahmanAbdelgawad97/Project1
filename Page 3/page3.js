var username=document.getElementById("user");
var messageError=document.getElementById("message");



var clickButtun=document.getElementsByClassName("but")[0];

var emailValid=document.getElementsByClassName("mail")[0];
var errorMessage=document.getElementById("error");

var phoneNumber=document.getElementsByClassName("phone")[0];
var phoneError=document.getElementById("phoneErrorMessage");





clickButtun.addEventListener("click",function(e){
    
    if(username.value==="")
    {
        e.preventDefault();
        messageError.style.color="red";
        username.style.borderColor="red";
        messageError.textContent="Please Enter Valide Name";
        return false;

    }

    if(!emailValid.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
        e.preventDefault();
        emailValid.style.borderColor="red";
        errorMessage.style.color="red";
        errorMessage.textContent="please enter correct Email"
        return false;
    }

    if(phoneNumber.value===""||phoneNumber.value<11)
    {
        e.preventDefault();
        phoneNumber.style.borderColor="red";
        phoneError.style.color="red";
        phoneError.textContent="Please Enter valide phone number";
        return false;
    }
});


























