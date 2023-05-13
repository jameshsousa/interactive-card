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

function isNumberCard(numbercard: string){
    const numberRegex = new RegExp (
        /(\d{4})?(\d{4})?(\d{4})?(\d{4})/, "$1 $2 $3 $4"
    );

    if(numberRegex.test(numbercard)) {
        return true;
    }
    return false;
}



const inputConfirm = (<HTMLInputElement>document.querySelector("#submit"));

inputConfirm.addEventListener("click", (event) => {
    event.preventDefault();
    if(nameCard.value == ""){
        (<HTMLInputElement>document.querySelectorAll("input")[0]).style.border="solid 3px #FF5050";
        (<HTMLInputElement>document.querySelector("#nameblank")).style.visibility="visible";        
        return;        
    }

    else if(isNumberCard(number.value)){
        alert("não é um número válido");
    }

    else if (number.value == ""){
        (<HTMLInputElement>document.querySelectorAll("input")[1]).style.border="solid 3px #FF5050";
        (<HTMLInputElement>document.querySelector("#numberblank")).style.visibility="visible";
        return;

    }
    
    else if (months.value == ""){
        (<HTMLInputElement>document.querySelectorAll("input")[2]).style.border="solid 3px #FF5050";
        return;
    }
    else if (years.value == ""){
        (<HTMLInputElement>document.querySelectorAll("input")[3]).style.border="solid 3px #FF5050";
        return;
    }
    else if (cvcs.value == ""){
        (<HTMLInputElement>document.querySelectorAll("input")[4]).style.border="solid 3px #FF5050";
        (<HTMLInputElement>document.querySelector("#cvcblank")).style.visibility="visible";
        return;
    }

    else{ 
        (<HTMLInputElement>document.getElementsByClassName("return")[0]).style.visibility="visible";
        (<HTMLInputElement>document.getElementsByClassName("form")[0]).style.display="none"; 
    }  
    
})




















