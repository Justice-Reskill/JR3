function getData() {
  fetch("http://mtaapi.herokuapp.com/stations")
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      // prints response json
      console.log(data.result);
      var train = document.getElementById("train");
      for (var i = 0; i < data.result.length; i++) {
        console.log(data.result[i]);
        if (data.result[i].id === "901S") {
          train.innerHTML = data.result[i].name;
        }
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

getData();
