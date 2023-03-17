"use strict";

const loginWindow = document.querySelector(".loginWindow");
const overlay = document.querySelector(".overlay");
const loginBtn = document.querySelector(".login");
const registerBtn = document.querySelector(".register");
const closeModalBtn = document.querySelector(".closeModalBtn");
const registerWindow = document.querySelector(".registerWindow");
const redBtn = document.querySelector(".redTeam");
const blueBtn = document.querySelector(".blueTeam");

let redTeam = false;
let blueTeam = false;

const openLoginWindow = function () {
  loginWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeLoginWindow = function () {
  loginWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

loginBtn.addEventListener("click", openLoginWindow);
overlay.addEventListener("click", closeLoginWindow);

const openRegisterWindow = function () {
  registerWindow.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeRegisterWindow = function () {
  registerWindow.classList.add("hidden");
  overlay.classList.add("hidden");
};

registerBtn.addEventListener("click", openRegisterWindow);
overlay.addEventListener("click", closeRegisterWindow);

redBtn.addEventListener("click", function () {
  redTeam = true;
});

blueBtn.addEventListener("click", function () {
  blueTeam = true;
});
