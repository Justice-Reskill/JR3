var childFunction = function () {
  console.log("Hello World");
};

function parentFunction(param1) {
  // Call the function
  param1();
}

// parentFunction(childFunction);

// anonymous function
parentFunction(function () {
  console.log("anonymous funciton");
});
