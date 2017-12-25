var btnElement = document.getElementById('btn');
btnElement.onclick = function () {
    var  firstNameValue = document.getElementById('firstName').value;
    var  lastNameValue = document.getElementById('lastName').value;
    var  fullNameValue = firstNameValue+' '+lastNameValue;
   document.getElementById('fullName').value = fullNameValue;
};

var summationElement = document.getElementById('summation');
summationElement.onclick = function () {
    var firstNumber = document.getElementById('firstNumber').value;
    var secondNumber = document.getElementById('secondNumber').value;
    var summationResult = firstNumber+secondNumber;
    document.getElementById('result').value = summationResult;

};