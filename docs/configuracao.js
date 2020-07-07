"use strict";
const buttonChangeEmail = document.querySelector("#buttonChangeEmail");
const fieldEmail = document.querySelector("#fieldEmail");
const currentUser = JSON.parse(sessionStorage.usuarioCorrente);
const { email } = currentUser;
fieldEmail.innerHTML = email;


const alterarEmail = () => {
  let input = document.createElement("input");
  let buttonSave = document.createElement("button");
  input.setAttribute("type", "email");
  input.setAttribute("id", "newEmail");
  input.setAttribute("placeholder", "Digite o novo email...");
  input.setAttribute("value", fieldEmail.innerHTML);
  buttonSave.setAttribute("class", "btn");
  buttonSave.setAttribute("id", "buttonSave");

  buttonChangeEmail.replaceWith(buttonSave);
  fieldEmail.replaceWith(input);
  buttonSave.appendChild(document.createTextNode("Salvar email"));

  const salvarNovoEmail = () => {
    input.replaceWith(fieldEmail);
    buttonSave.replaceWith(buttonChangeEmail);
  };

  const newEmail = (event) => {
    fieldEmail.innerHTML = event.target.value;
  };

  input.addEventListener("keyup", newEmail);
  buttonSave.addEventListener("click", salvarNovoEmail);
};
buttonChangeEmail.addEventListener("click", alterarEmail);
