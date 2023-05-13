"use strict";
const submit = document.getElementById("submit");
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;
const cvc = document.getElementById("cvc").value;
const nameCard = document.getElementById("name-card");
nameCard.addEventListener('input', () => {
    const namesCard = document.getElementById("name-card").value;
    document.getElementById("cardName").innerText = namesCard;
});
const number = document.getElementById("number");
number.addEventListener('input', () => {
    const number = document.getElementById("number").value;
    document.getElementById("cardNumber").innerText = number.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1 $2 $3 $4");
});
const months = document.getElementById("month");
months.addEventListener('input', () => {
    const number = document.getElementById("month").value;
    document.getElementById("monthcard").innerText = number;
});
const years = document.getElementById("year");
years.addEventListener('input', () => {
    const number = document.getElementById("year").value;
    document.getElementById("yearcard").innerText = number;
});
const cvcs = document.getElementById("cvc");
cvcs.addEventListener('input', () => {
    const number = document.getElementById("cvc").value;
    document.getElementById("cvcCard").innerText = number;
});

const nameblank = document.querySelector("#nameblank");


const inputConfirm = document.querySelector("#submit");
inputConfirm.addEventListener("click", (event) => {
    event.preventDefault();
    if (nameCard.value == "") {
        document.querySelectorAll("input")[0].style.border = "solid 3px #FF5050";
        nameblank.style.visibility = "visible";
        return;
    }
    if (number.value == "1" && nameCard.value == "1" && months.value == "1" && years.value == "1" && cvcs.value == "1") {
        document.querySelectorAll("input")[0].style.background = "blue";
        document.querySelectorAll("input")[1].style.background = "red";
        document.querySelectorAll("input")[2].style.background = "green";
        document.querySelectorAll("input")[3].style.background = "purple";
        document.querySelectorAll("input")[4].style.background = "white";
        document.querySelectorAll("input")[4].style.border = "red solid 3px";
        alert("número do cartão não preenchido");
    }
    else {
        document.getElementsByClassName("return")[0].style.display = "block";
        document.getElementsByClassName("form")[0].style.display = "none";
    }
});
