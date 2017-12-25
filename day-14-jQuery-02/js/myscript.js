/* Form validation with jQuery */
function checkFirstName() {
    var firstNameValue = $('#firstName').val();
    // alert(firstNameValue.length);
    if(firstNameValue.length > 6 && firstNameValue.length < 16){
        $('#firstNameError').text(' ');
        return true;
    }else {
        $('#firstNameError').text('First name be 7 to 15 character');
        return false;
    }
}
$('#firstName').keyup(function () {
   checkFirstName();
});

function checkLastName() {
    var lastNameValue = $('#lastName').val();
    // alert(firstNameValue.length);
    if(lastNameValue.length > 6 && lastNameValue.length < 16){
        $('#lastNameError').text(' ');
        return true;
    }else {
        $('#lastNameError').text('First name be 7 to 15 character');
        return false;
    }
}
$('#lastName').keyup(function () {
    checkLastName();
});

function checkEmailAddress() {
    var emailAddressValue = $('#emailAddress').val();
    var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/i);
    if(pattern.test(emailAddressValue)){
        $('#emailAddressError').text(' ');
        return true;
    }else {
        $('#emailAddressError').text('Your email address is invalid');
        return false;
    }
}
$('#emailAddress').keyup(function () {
    checkEmailAddress();
});

function checkPassword() {
    var passwordValue = $('#password').val();
    if (passwordValue.length > 7){
        $('#passwordError').text(' ');
        return true;
    }else {
        $('#passwordError').text('Password must be minimum 8 digit.');
        return false;
    }
}
$('#password').keyup(function () {
    checkPassword();
});

function checkConfirmPassword() {
    var passwordValue = $('#password').val();
    var confirmPasswordValue = $('#confirmPassword').val();
    if(passwordValue == confirmPasswordValue){
        $('#confirmPasswordError').text(' ');
        return true;
    }else {
        $('#confirmPasswordError').text('Password & confirm password are not same');
        return false;
    }
}
$('#confirmPassword').keyup(function () {
    checkConfirmPassword();
});


/* show password code start */
$('#showPassword').click(function () {
    if(this.checked){
        $('#password').attr('type', 'text');
    }else{
        $('#password').attr('type', 'password');
    }
});

function checkGender() {
    var genderValue = $('input[type="radio"]:checked').val();
    if(genderValue == "Male"){
        $('#genderError').text(' ');
        return true;
    }else if(genderValue == "Female"){
        $('#genderError').text(' ');
        return true;
    }else {
        $('#genderError').text('Please select your gender info');
        return false;
    }
}


function checkDistrictName() {
    var districtNameValue = $('#districtName').val();
    if(districtNameValue == ' '){
        $('#districtNameError').text('Please select a district name');
        return false;
    }else {
        $('#districtNameError').text(' ');
        return true;
    }
}
$('#districtName').change(function () {
    checkDistrictName();
});


// /* Form submit check code */
$('#myForm').submit(function () {
    // return true;
    if(checkFirstName() == true && checkLastName() == true && checkEmailAddress() == true && checkPassword() == true && checkConfirmPassword() == true && checkGender() == true && checkDistrictName() == true){
        return true;
    }else {
        return false;
    }
});