'use strict';

let name = document.getElementById("name");

name.addEventListener("input", function (event) {
  if (name.validity.typeMismatch) {
    name.setCustomValidity("Looser Uuuser");
  } else {
    name.setCustomValidity("");
  }
});