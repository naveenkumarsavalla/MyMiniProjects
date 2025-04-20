function validateUserName(){
    if(document.getElementById("userName").value.trim() == "") {
        document.getElementById("userNameErr").classList.remove("d-none");
    }
    else if(document.getElementById("userName").value.trim().length < 3 || document.getElementById("userName").value.trim().length > 10){
        document.getElementById("userNameErr").classList.add("d-none");
        document.getElementById("userNameLengthErr").classList.remove("d-none");
    }
    else{
        document.getElementById("userNameErr").classList.add("d-none");
        document.getElementById("userNameLengthErr").classList.add("d-none"); 
    }
}

function validateEmail() {
    if(document.getElementById("email").value.trim() == "") {
        document.getElementById("emailErr").classList.remove("d-none");
    }
    else if(document.getElementById("email").value.trim().indexOf("@") == -1 || (document.getElementById("email").value.trim().endsWith(".com") == false)) {
        document.getElementById("emailErr").classList.add("d-none");
        document.getElementById("emailFormatErr").classList.remove("d-none"); 
    }
    else{
        document.getElementById("emailErr").classList.add("d-none");
        document.getElementById("emailFormatErr").classList.add("d-none");
    }
}

function validatePassword() {
    if(document.getElementById("password").value == "") {
        document.getElementById("passwordErr").classList.remove("d-none");
    }
    else if(document.getElementById("password").value.length < 8) {
        document.getElementById("passwordErr").classList.add("d-none");
         document.querySelector("#passwordLengthErr").classList.remove("d-none");
    }
    else{
        document.getElementById("passwordErr").classList.add("d-none");
        document.getElementById("passwordLengthErr").classList.add("d-none");

    }
}

function validateConformPasswordMatched() {

    document.getElementById("conformpasswordErr").classList.add("d-none");

    if(document.getElementById("password").value != document.getElementById("conformpassword").value) {
        document.getElementById("conformpasswordErr").classList.remove("d-none");
    }

}

function validateForm() {
    validateUserName();
    validateEmail();
    validatePassword();
    validateConformPasswordMatched();
}
