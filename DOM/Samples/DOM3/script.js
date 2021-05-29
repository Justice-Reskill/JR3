var body = document.getElementById("b1");
// create paragraph tag
var paragraph = document.createElement("p");
paragraph.innerHTML = "New paragraph content";

// created h1 tag
var title = document.createElement("h1");
title.innerHTML = "My Header";

// created div
var container = document.createElement("div");
// inside div add paragraph
container.appendChild(paragraph);

// inside body add title
body.appendChild(title);
// inside body, under title add div
body.appendChild(container);
