var nameError = document.getElementById('nameError');
var emailError = document.getElementById('emailError');
var phoneError = document.getElementById('phoneError');
var passError = document.getElementById('passError');
var submitError = document.getElementById('submitError');
var submitBtn = document.getElementById('submitBtn');



function validateName(){
    var name = document.getElementById('name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
        
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write Full Name';
        return false;

    }
    nameError.innerHTML = '<p>You can Continue ---- </p>';
    return true;
   
}


function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email should not be empty";
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter Valid Email";
        return false;
    }
    emailError.innerHTML = '<p>You can Continue ---- </p>';
    return true;
}

function validatePhone(){
    var phone = document.getElementById('phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no. should not be empty';
        return false;
        
    }
    if(phone.length != 10){
        phoneError.innerHTML = 'Must be 10 digit no.';
        return false;
        
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Enter Valid phone no.';
        return false;

    }
    phoneError.innerHTML = '<p>You can Continue ---- </p>';
    return true;
   
}

function validatePass(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
        passError.innerHTML = "Password field should not be empty";
        
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passError.innerHTML = "Password length must be greater than 8 characters, Password should contain 1 Uppercase, 1 Lowecase,1 Digit & 1 Alphabet";
        return false;
    }
    passError.innerHTML = "<p>Password Match ---</p>";
    return true;
}


function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validatePass()){
        submitError.style.display = 'block';
        submitError.innerHTML = "Please fix the error before submit";
        setTimeout(function() { submitError.style.display = 'none';}, 5000);
        return false;
    
          
    }
    if(validateName() || validatePhone() || validateEmail() || validatePass()){
        confirm('Click OK to submit the form?');
        
    }

}





