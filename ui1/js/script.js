const email = document.getElementById("email");
const password = document.getElementById("password");
const email_error = document.getElementById("email-error");







const showPassword = document.getElementById("showPassword");

showPassword.addEventListener("click", ()=>{
    if(password.getAttribute("type") == "password"){
        password.setAttribute("type", "text");
        showPassword.classList.remove("fa-eye-slash");
        showPassword.classList.add("fa-eye");

    }else
    {
        password.setAttribute("type", "password");
        showPassword.classList.add("fa-eye-slash");
        showPassword.classList.remove("fa-eye");
    }
});




const error = document.getElementById("error");

password.addEventListener("keyup", function(){
    if(password.value.length<8){
        error.innerHTML= "Password too much short";
        error.style.visibility="visible";
    }else
    {
        error.style.visibility="hidden";
    }

});


