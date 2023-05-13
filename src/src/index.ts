const submit = document.getElementById("submit");


const month = (<HTMLInputElement>document.getElementById("month")).value;
const year = (<HTMLInputElement>document.getElementById("year")).value;
const cvc = (<HTMLInputElement>document.getElementById("cvc")).value;

const nameCard = (<HTMLInputElement>document.getElementById("name-card"));

nameCard.addEventListener('input', () => {
    const namesCard = (<HTMLInputElement>document.getElementById("name-card")).value;    
    (<HTMLInputElement>document.getElementById("cardName")).innerText = namesCard;       
    
})

const number = (<HTMLInputElement>document.getElementById("number"));

    number.addEventListener('input', () => {
    const number = (<HTMLInputElement>document.getElementById("number")).value;     
    (<HTMLInputElement>document.getElementById("cardNumber")).innerText = number.replace(/(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1 $2 $3 $4");       
    
})

const months = (<HTMLInputElement>document.getElementById("month"));

    months.addEventListener('input', () => {
    const number = (<HTMLInputElement>document.getElementById("month")).value;    
    (<HTMLInputElement>document.getElementById("monthcard")).innerText = number;       
    
})

const years = (<HTMLInputElement>document.getElementById("year"));

    years.addEventListener('input', () => {
    const number = (<HTMLInputElement>document.getElementById("year")).value;    
    (<HTMLInputElement>document.getElementById("yearcard")).innerText = number;       
    
})

const cvcs = (<HTMLInputElement>document.getElementById("cvc"));

    cvcs.addEventListener('input', () => {
    const number = (<HTMLInputElement>document.getElementById("cvc")).value;    
    (<HTMLInputElement>document.getElementById("cvcCard")).innerText = number;       
    
})

const inputConfirm = (<HTMLInputElement>document.querySelector("#submit"));

inputConfirm.addEventListener("click", (event) => {
    event.preventDefault();
    if(nameCard.value == ""){
        (<HTMLInputElement>document.querySelectorAll("input")[0]).style.border="solid 3px #FF5050";
        alert("por favor informe seu nome");
        return;
    }
    if(number.value == "1" && nameCard.value == "1" && months.value == "1" && years.value == "1" && cvcs.value == "1" ){
        (<HTMLInputElement>document.querySelectorAll("input")[0]).style.background="blue";
        (<HTMLInputElement>document.querySelectorAll("input")[1]).style.background="red";
        (<HTMLInputElement>document.querySelectorAll("input")[2]).style.background="green";
        (<HTMLInputElement>document.querySelectorAll("input")[3]).style.background="purple";
        (<HTMLInputElement>document.querySelectorAll("input")[4]).style.background="white";
        (<HTMLInputElement>document.querySelectorAll("input")[4]).style.border="red solid 3px";
        alert("número do cartão não preenchido")
    }
    else{ 
        (<HTMLInputElement>document.getElementsByClassName("return")[0]).style.display="block";
        (<HTMLInputElement>document.getElementsByClassName("form")[0]).style.display="none"; 
    }  
    
})




















