var cleackMeElement = document.getElementById('addBtn');
cleackMeElement.onclick = function () {
    var newHeadingElement = document.createElement('h1');
    var newParagraphElement = document.createElement('p');

    newHeadingElement.innerHTML = 'This is heading element';
    newParagraphElement.innerHTML = 'This is paragraph element';

    document.getElementById('div').appendChild(newHeadingElement);
    document.getElementById('div').appendChild(newParagraphElement);
};

// var headingElement = document.getElementById('h1');
// headingElement.onclick = function () {
//     headingElement.style.color = 'red';
// };


// JQuery Syntax:
// $(selector).action();


// $('#h1').css('color', 'red');
$('#h1').click(function () {
    // $('#h1').css('color', 'red')
    $(this).css('color', 'red');
});

// //meny css property add
// $('#h1').click(function (){
//     $('#h1').css({
//         'color': 'red',
//         'background': 'black'
//     });
// });


// input box value
$('#submitBtn').click(function () {
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  // alert(firstName);
  var fullName = firstName+' '+lastName;
  $('#fullName').val(fullName);
});
// // innerHTMl value
// $('#submitBtn').click(function () {
//     var firstName = $('#firstName').val();
//     var lastName = $('#lastName').val();
//     // alert(firstName);
//     var fullName = firstName+' '+lastName;
//     $('#fullName').html(fullName);
// });

// imgae gallary
$('#img1').click(function () {
    // var imgUrl = $('#img1').attr('src');
    var imgUrl = $(this).attr('src');
    // alert(imgUrl);
    $('#mainImage').attr('src', imgUrl);
});
$('#img2').click(function () {
    var imgUrl = $(this).attr('src');
    $('#mainImage').attr('src', imgUrl);
});
$('#img3').click(function () {
    var imgUrl = $(this).attr('src');
    $('#mainImage').attr('src', imgUrl);
});
$('#img3').click(function () {
    var imgUrl = $(this).attr('src');
    $('#mainImage').attr('src', imgUrl);
});
$('#img4').click(function () {
    var imgUrl = $(this).attr('src');
    $('#mainImage').attr('src', imgUrl);
});

