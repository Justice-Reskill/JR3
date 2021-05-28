console.log(document);
var element = document.getElementById("p1");
console.log(element);
console.log(element.innerHTML);

element.innerHTML = "New paragraph text.";

// updating styles
var element2 = document.getElementById("p2");
console.log(element2);
element2.style.color = "purple";
element2.style.fontSize = "20px";
element2.style.textAlign = "center";

var body = document.getElementById("body");
console.log(body);
var h1 = document.getElementById("h1");
console.log(h1);

var nameInput = document.getElementById("name");
nameInput.value = "Eleanor";
console.log(nameInput.value);
nameInput.value = "";

// get elements by class name
var boxes = document.getElementsByClassName("box");
console.log(boxes);
for (var i = 0; i < boxes.length; i++) {
  console.log(boxes[i]);
  var tmp = boxes[i];
  console.log(tmp.innerHTML);
  tmp.innerHTML = "Blue Boxes";
  tmp.style.fontSize = "30px";
}

var radioButton = document.getElementsByName("r1");
console.log(radioButton);
for (var i = 0; i < radioButton.length; i++) {
  var tmp = radioButton[i];
  if (radioButton[i].checked) {
    alert("Select item: " + tmp.value);
  }
}
