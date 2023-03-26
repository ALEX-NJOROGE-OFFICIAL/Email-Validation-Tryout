container = document.querySelector(".container")
pwShowHide = document.querySelector(".showhidepw")
pwFields = document.querySelector(".password")
signUp = document.querySelector(".signup-link")
login = document.querySelector(".login-link")   

//js code to show and hide password and change icon

pwShowHide.forEach(eyeIcon =>{
    eyeIcon.addEventListener("click", ()=>{
        pwFields.forEach(pwField =>{
            if (pwField.type === "password"){
                pwField.type = "text";
                pwShowHide.forEach(icon =>{
                    Icon.ClassList.replace("fa-eye-slash", "fa-eye");
                })
            }else{
                pwField.type = "password";

                pwShowHide.forEach(icon =>{
                    icon.ClassList.replace("fa-eye", "fa-eye-slash")
                })
            }
        })
    })
});    

//js code to display login and registration forms

signUp.addEventListner("click", function() {
    container.ClassList.add("active");
});
login.addEventListner("click", function() {
    container.ClassList.remove("active");
})
// form validation

function loginvalidation(){
    let email = document.forms.loginForm.email.value;
    let password = document.forms.loginForm.password.value;
    let regEmail = /^[a-zA-Z0-9.!#$%&'*+/^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email == "" || !regEmail.test(email)){
        alert("Please enter your email properly.");
        email.focus();
        return false;
            }
            if (password == "" ){
                alert("Please enter your password.");
                password.focus();
                return false;
                    }
                    else{
                        alert("Login Successful.")
                    }
}