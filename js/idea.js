var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("ADDplace").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "SalePlaces.txt", true);
  xhttp.send();
}
// Idea.js
// To serve as a location for where the pictures are sold in real life, closest to your location would be a bonus

// cookies for tracking visitors
// SVG / Animation is on Gallery Hover
// Slider is Gallery >>> "click" Picture

// Hopefully this will be a pass :)

// TO INCOMPLETE!! will come back just for deadline, most requirements are met.