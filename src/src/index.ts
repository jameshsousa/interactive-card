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




















