
/* 
ACHTUNG JS ist case sensetive beispiel: foreach geht nicht weil es forEach geschrieben ist, E ist gross von each
*/

import { Reisen } from './Reisen.js';
const absatzlog = ["------"]
const array = Array(1,2,3,4,5,6,7)
const zahlen = [1,2,3,4,5,6,7]

function gibaus(wert){
    console.log(wert);
}

const hauraus = (wert) =>{ console.log(wert);}

const geradeZahlen = zahlen.filter( (wert) =>{ 
        if (wert % 2 == 0) return true;
        else return false;
     }
);

const ungeradeZahlen = zahlen.filter ((wert) =>{
    return (wert %2); // kurz schreibweise der function geradeZahlen wenn vor der Klammer ! steht wird die anweisung verneint (if / else ) schreibweise
})

const max = zahlen.reduce((oldLet, currentLet) =>{ if (oldLet < currentLet) return currentLet; else return oldLet; });
const min = zahlen.reduce ((oldLet, currentLet) => {return (oldLet>currentLet) ? oldLet : currentLet })

function Reise(kennzeichen, fahrer, mitfahrer){
    this.kennzeichen = kennzeichen, 
    this.fahrer = fahrer, 
    this.mitfahrer = mitfahrer
    this.AnzahlSitzplaetze = ()=> {return "Es fahren: " + this.mitfahrer.length + " Leute im Bus mit.";}
}

const reiseRom = new Reise("SG-31445245", "Stephanie", ["Spongbob", "Plankton", "Patrik"])
const reiseFlorence = new Reisen ("SG-LeckMichAmArsch123123123", "Martin", ["Crabs", "Plankton", "Sandy"])
const reiseBasel = new Reisen ()

const reiseNachJerusalem = { // json schreibweise / literal schreibweise
    fahrzeug: "BMW M3",
    kennzeichen:"ZH-1872876",
    busfahrer: "Bleon",
    mitfahrer: ["Miran", "Noel", "Coco"],
}

const busreise = { // json schreibweise / literal schreibweise
    kennzeichen: "SG-1234",
    busfahrer: "Peter",
    mitfahrer: ["Thomas", "Susi", "Max"]
}

const Reiseangebote = (busreise, reiseNachJerusalem, reiseRom, reiseFlorence)

zahlen.forEach(gibaus); 
console.log(absatzlog);

array.forEach(hauraus);
console.log(absatzlog);

geradeZahlen.forEach((wert)=>{
    console.log(wert);
})
console.log(absatzlog);

ungeradeZahlen.forEach((wert)=>{
    console.log(wert);
})
console.log(absatzlog);

console.log(max);
console.log(absatzlog);

console.log(min);
console.log(absatzlog);

console.log(busreise);
console.log(absatzlog);

console.log(typeof busreise);
console.log(absatzlog);

const filterZahlenganzkurz = zahlen.filter ((wert) =>{return (wert %2)}).forEach((wert)=>{console.log(wert);}) // anschauen was den Codebrickt ( es wird direkt bei der zeile ausgegeben)
console.log(absatzlog);

console.log(reiseNachJerusalem);
console.log(absatzlog);

console.log(reiseRom.AnzahlSitzplaetze());
console.log(absatzlog);

/*
Reiseangebote.forEach((wert)=>{
    console.log(wert);
})
*/ 

window.addEventListener('load', () =>{
    const b = document.getElementById("b1");
    b.addEventListener('click', ()=>{
        fetch('Reisen2026.json')
            .then( (response) => {return response.json() } )
            .then ( (json) => {
                const d = document.getElementById("d1");
                d.innerText=json.kennzeichen;
            })
    });
})