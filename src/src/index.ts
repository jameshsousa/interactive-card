const submit = document.getElementById("submit");
const namesCard = (<HTMLInputElement>document.getElementById("name-card")).value;
const number = (<HTMLInputElement>document.getElementById("number")).value;
const month = (<HTMLInputElement>document.getElementById("month")).value;
const year = (<HTMLInputElement>document.getElementById("year")).value;
const cvc = (<HTMLInputElement>document.getElementById("cvc")).value;



submit?.addEventListener('input', () => {
    const namesCard = (<HTMLInputElement>document.getElementById("name-card")).value;
    alert(namesCard);
})




















