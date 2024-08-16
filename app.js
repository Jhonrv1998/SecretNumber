let attempts = 1;
let maxNumber=10;
let listRandomNumbers =[];
let secretNumber = generatingSecretNumber();
textInit();

function textInit() {
    assignTextElement('h1','JUEGO DE NÚMERO ALEATORIO')
    assignTextElement('p',"adivina adivinador")
}
function checkNumber() {
    let userNumber = parseInt(document.getElementById('userNumber').value);
    console.log(userNumber);
    console.log(attempts);
    if (userNumber === secretNumber) {
            alert(`¡Felicidades! ${(attempts===1) ? 'Ganaste en el primer intento': `Ganaste en ${attempts} intentos`}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (userNumber > secretNumber) {
        alert('El número secreto es menor');
        cleanInput();
    }

    else if (userNumber < secretNumber) {
        alert('El número secreto es mayor');
        cleanInput();
    }else{
        alert('Número no válido');
        cleanInput();
    }
    attempts++;
}

function cleanInput(){
    document.getElementById('userNumber').value="";
}
function resetGame(){
    cleanInput();
    secretNumber=generatingSecretNumber();
    console.log(secretNumber);
    attempts=1;
    document.getElementById('reiniciar').setAttribute('disabled',true);

}

function generatingSecretNumber() {
    let generatingNumber= Math.floor(Math.random() * maxNumber) + 1;
    if (listRandomNumbers.length === maxNumber) {
        alert('Se han agotado los números posibles');
    }
    else {
        if (listRandomNumbers.includes(generatingNumber)) {
            return generatingSecretNumber();

        } else {
            listRandomNumbers.push(generatingNumber);
            console.log(listRandomNumbers);
            return generatingNumber;
        }
    }
}

function assignTextElement(elemento,texto) {
    let elementhtml=document.querySelector(elemento);
    elementhtml.innerHTML=texto;
}