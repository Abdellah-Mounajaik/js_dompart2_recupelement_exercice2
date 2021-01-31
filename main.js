let PremierH3 = document.getElementsByTagName("h3")[0].innerText
console.log(PremierH3);

let titreNiv3 = document.getElementById("titreNiv3")
console.log(titreNiv3);

let succede = titreNiv3.previousElementSibling
console.log(succede);

let next = document.getElementsByClassName("petitParagraphe")[0].nextElementSibling
console.log(next);

let important = document.getElementsByClassName("important")[0]
console.log(important.parentElement);

let ListElement = document.getElementById('listElements').parentElement
let premierEl = ListElement.firstElementChild
console.log(premierEl);

let exo7 = document.getElementsByClassName('important')
console.log(exo7);
let exo7Longueur = exo7.length -1
let exo7Bis = exo7[exo7Longueur]
console.log(exo7Bis.nextElementSibling);

let textGeneral = document.getElementById("textGeneral").nextElementSibling.nextElementSibling.innerText
console.log(textGeneral);


let mySpan = document.getElementsByTagName("span")[1];
let spanParent = mySpan.parentElement;
let SpanPrenom = spanParent.nextElementSibling;
console.log(SpanPrenom);

let nicolas = document.getElementsByTagName("b")[2];
let nicolas2 = nicolas.parentElement;
let nicolas3 = nicolas2.parentElement;
let nicolas4 = nicolas3.previousElementSibling;
let nicolas5 = nicolas4.firstElementChild;
let nicolas6 = nicolas5.firstElementChild;
console.log(nicolas6.innerText);

let Methode = document.querySelector('#textGeneral')
console.log(Methode);

let recuperation = document.querySelector(".grandParagraphe")
console.log(recuperation.innerText);

let MethodeAll = document.querySelectorAll('li')
console.log(Methode);
let listFinal = Array.from(MethodeAll)
console.log(listFinal);

listFinal.forEach(el => {
    console.log(el);
});
