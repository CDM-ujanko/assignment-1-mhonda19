console.log('The New File!');
console.log($);

var x = 'a string variable';
console.log(x); 

//console.log(document);
//console.log($(document));
//console.log($(document));
console.log($('#myID p'));
var $mydiv = $('#myID');
var mydiv = document.getElementById('#myID');
mydiv.setAttribute('style', 'color:blue');

$mydiv.setAttribute('style', 'color:blue');

console.log(mydiv);

/*$( document ).ready(function() {
  // Handler for .ready() called. will only do function once everything on page is ready
    console.log("I am ready");
});*/