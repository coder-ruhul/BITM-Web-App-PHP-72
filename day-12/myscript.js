var redBtn = document.getElementById('redBtn');
redBtn.onmousemove = function () {
    var divElememnt = document.getElementById('div');
    divElememnt.className = 'class-one';
    // divElememnt.style.backgroundColor = 'red';
    // divElememnt.style.height = '200px';
    // divElememnt.style.width = '200px';
    // divElememnt.style.borderRadius = '100px';
};
var greenBtn = document.getElementById('greebBtn');
greenBtn.onmousemove = function () {
    var divElememnt = document.getElementById('div');
    divElememnt.className = 'class-two';
    // divElememnt.style.backgroundColor = 'green';
};
var blueBtn = document.getElementById('blueBtn');
blueBtn.onmousemove = function () {
    var divElememnt = document.getElementById('div');
    divElememnt.className = 'class-three';
    // divElememnt.style.backgroundColor = 'blue';
};
var defaultBtn = document.getElementById('defaultBtn');
defaultBtn.onmousemove = function () {
    var divElememnt = document.getElementById('div');
    divElememnt.style.backgroundColor = 'white';
};
// =================================================================

var upBtn = document.getElementById('upBtn');
upBtn.onmousemove = function () {
    var divElememnt = document.getElementById('divUpDown');
    divElememnt.style.height = '0px';
    divElememnt.style.transition = '2s';
};
var downBtn = document.getElementById('downBtn');
downBtn.onmousemove = function () {
    var divElememnt = document.getElementById('divUpDown');
    divElememnt.style.height = '200px';
    divElememnt.style.transition = '2s';
};




// var firstName = document.getElementById('firstName');
// firstName.onkeyup = function () {
//     var firstNameValue = document.getElementById('firstName').value;
//     document.getElementById('result1').innerHTML = firstNameValue;
// }
// var lastName = document.getElementById('lastName');
// lastName.onkeyup = function () {
//     var lastNameValue = document.getElementById('lastName').value;
//     document.getElementById('result2').innerHTML = lastNameValue;
// }
// lastName.onblur = function () {
//     var firstNameValue = document.getElementById('firstName').value;
//     var lastNameValue = document.getElementById('lastName').value;
//     // document.getElementById('result3').innerHTML = firstNameValue+' '+lastNameValue;
//     document.getElementById('result3').innerHTML = parseInt(firstNameValue)+parseInt(lastNameValue);
// }
// // ======================================================================
//
//
// var btnElement = document.getElementById('btn');
// btnElement.onclick = function () {
//     var startingNumber = document.getElementById('startingNumber').value;
//     var endingNumber = document.getElementById('endingNumber').value;
//     var res ='';
//     for(var x = parseInt(startingNumber); x<= parseInt(endingNumber); x++){
//         // document.write(x+' ');
//         res+=x; // res = res + x;
//
//     }
//     document.getElementById('result').innerHTML =  res;
// };
// // ==========================================================================
//










// var firstName = document.getElementById('firstName');
// firstName.onkeyup = function () {
//     firstNameValue = document.getElementById('firstName').value;
//     document.getElementById('result1').innerHTML = firstNameValue;
//
// }
// var lastName = document.getElementById('lastName');
// lastName.onkeyup = function () {
//     lastNameValue = document.getElementById('lastName').value;
//     document.getElementById('result2').innerHTML = lastNameValue;
//
//
//     var fullName = document.getElementById('result3');
//     fullName.innerHTML = firstNameValue+lastNameValue;
// }






// ocument.getElementById('a').value;
// document.getElementById('b').innerHTML;d
// document.getElementById('c').getAttribute('src');

