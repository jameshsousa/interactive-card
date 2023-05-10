"use strict";
const submit = document.getElementById("submit");
const namesCard = document.getElementById("name-card").value;
const number = document.getElementById("number").value;
const month = document.getElementById("month").value;
const year = document.getElementById("year").value;
const cvc = document.getElementById("cvc").value;
submit === null || submit === void 0 ? void 0 : submit.addEventListener('input', () => {
    const namesCard = document.getElementById("name-card").value;
    alert(namesCard);
});
