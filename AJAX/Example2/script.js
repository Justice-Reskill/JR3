function getData() {
  axios
    .get("http://mtaapi.herokuapp.com/stations")
    .then(function (response) {
      var data = response.data.result;
      var ul = document.getElementById("stations");
      for (var i = 0; i < data.length; i++) {
        var createLi = document.createElement("li");
        createLi.innerHTML = data[i].name;
        ul.appendChild(createLi);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
getData();
