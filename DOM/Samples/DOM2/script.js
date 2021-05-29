// function clickedButton(string) {
//   alert("Hello " + string);
// }

var input = document.getElementById("input1");
var inputValue = input.value;
console.log(inputValue);

// function clickedButton() {
//   alert("Hello " + inputValue);
// }

inputValue = "world";

function clickedButton() {
  if (inputValue === "class") {
    alert("Hello " + inputValue);
  } else {
    alert("Does not equal class");
  }
}

function clickedButton2(event) {
  console.log(event);
  var input2 = document.getElementById("input1");
  console.log(input2.value);
  console.log(typeof input2.value);
  if (input2.value === "") {
    alert("please enter information");
  } else {
    alert(input2.value);
  }
}

// function handleEvt(e){
//   if (e.keyCode === 13) {  //where 13 is the enter button
//     v = $(this).val()
//     alert('it is working');
//   }
// }

// $(function(){
// $('input').on('keyup', handleEvt)
// })

function handleKeyPress(event) {
  console.log(event);
  if (event.keyCode === 97) {
    alert("a pressed");
  }
}

var body = document.getElementById("b1");
var h1Element = document.createElement("h1");
var pElement = document.createElement("p");

h1Element.innerHTML = "H1 Text";
pElement.innerHTML = "paragraph text";

// h1Element.style.color = "purple";
pElement.style.color = "blue";

body.appendChild(h1Element);
body.appendChild(pElement);

console.log(h1Element);
console.log(pElement);
