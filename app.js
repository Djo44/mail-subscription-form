let email = document.querySelector("#email")
let button = document.querySelector("#submit")
let paragraf = document.querySelector("p")

button.addEventListener("click", info);

function info() {
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email.value.match(mailformat)) {
    alert("email submited");


  } else {
    email.style.borderColor = "red";
    paragraf.style.visibility = "visible";
    button.style.top = "20px";

  }

}