// setTimeout(function () {
//   alert("Hello! Set timeout callback");
// }, 3000);

// setInterval(function () {
//   alert("Hello! Set interval callback");
// }, 5000);

var button = document.getElementById("button1");
var div = document.getElementById("textDiv");

button.addEventListener("click", function () {
  div.innerHTML = "Added text";
});
