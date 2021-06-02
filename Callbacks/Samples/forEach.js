// var array = ["a", "b", "c", "d"];

// array.forEach(function (value, index) {
//   console.log(value);
//   console.log(index);
// });

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  console.log(item);
  console.log(index);
  // document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
