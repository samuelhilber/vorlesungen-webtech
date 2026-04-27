let a = 5;
let b = "Hallo";
const c = 5; /* Konstante, kann nicht verändert werden */

function add ( a,b) 
 /* funktions Schreibweise */
    { 
    return a+b;
    }

let addieren = (a,b) => 
/* ist die Arrow schreibweise */ 
    {
    return a + b
    };

const sub = (a,b) => 
    {
    return a-b
    }

const subtract = (a,b) => a-b /* ist das selbe wie die normale Arrow Schreibweise muss aber direkt ausführen also one line */

function machwas(a,b,...r) /* r ist hier ein Array */
{
    return a+b
    console.log("Das wurde alles noch übergeben" + r)
}

function ausgabe(wert){
    console.log(wert);
}

const ausgaben = (wert) => {
    console.log(wert);
}

const array = Array(); /* const macht nur den "type" also das es ein array ist constant nicht die parameter*/
array[0]=1;
array[1]=2;
array[2]= (a,b) => a-b;

const k = [1,2,3,4,5,6,7]
let zwischensumme = 0
for (let i = 0; i<k.length; i++){
    zwischensumme += k[i];
}

const l = [1,2,3,4,5,6,7]
const m= l.filter((wert) => { // find kann für filter eingesetzt werden Fitlter gibt jedes True aus find nur das erste!!
    if (wert % 2 == 0) return true;
    else return false;
});  // doppel Klammer für function aufruf filter zweite für den Parameter Wert 

const o = [1,2,3,4,5,6,7]
const n = o.map((wert)=>{  // gibt nur "true / false " auf die functions nicht 2 / 4 / 6 // map ändert ab
    if (wert % 2 == 0) return true;
    else return false;
}); 

const s = [1,2,3,4,5,6,7]
const r= l.filter((wert) => { 
    if (wert % 2 == 0) return true;
    else return false;
}).map((wert)=>{ 
    if (wert % 2 == 0) return true;
    else return false;})

    // hier wird zuerst aus l nur die gerade werte ausgelesen und diese dann in "true" umgewandelt siehe mann kann direkt an das ().map an docken an die vorheringen functions


const q = [1,2,3,4,5,6,7]
const p = q.reduce((alterW, w) =>{ // in dieser Function wird die zahlen Summe genommen reduce kann den vom "vorherigen durchlauf" den Wert speichern hier "alterW"
    return alterW + w
})

const t = document.getElementById("b1"); // live funktion mit "getElementById" kann direkt auf die HTML Id zugegriffen werden
t.addEventListener("click", () => { // EventListener wartet darauf bis etwas passiret hier wurde click verwenden umd zu chekcen ob der Button gepressed wurde
    const d = document.getElementById("d1");
    d.innerText = "Wurde geclickt";
});

let d = add(5,10);
let e = add(); /* wird keinen error werfen sondern "Not a Number" hat den typ Number, nicht wie bei Programmier sprachen*/
let f = add(1,2,4,5); /*ergebniss 3. 4 und 5 werden fallen gelassen */
let g = add; /* ohne Klammern kein funktions aufruf also wird die Funktion ausgegeben */
let h = addieren(5,6);
let j = machwas(1,2,3)
// k oben vergeben ist ein array
// l ist ein array für filter
// m ist ein filter
// n map
// o ist ein array für map
// p ist ein reduce
// q ist ein array für reduce
// r kompiniert die array funktionen 
// s liefert die werte für r
// t ruf den Button auf für ein Event Listener


console.log(a);
console.log(typeof a);
a ="Jetzt bin ich ein String";
console.log(a);
console.log(typeof a);
 
/* ohne type casting kann einfach der type mit neuer Zuweisung überschrieben werden */

console.log(g);
console.log(typeof g);

console.log(f);
console.log(typeof f);

console.log(array)
console.log(typeof array)
console.log(array[2](1,2)) /* so kann auf eine Function in einem Array zugegriffen werden*/

console.log(zwischensumme)
console.log(typeof zwischensumme)

l.forEach(ausgabe)
console.log("-------")
l.forEach(ausgaben)
console.log("-------")
console.log(m)
console.log("-------")
console.log(n)
console.log("-------")
console.log(p)
console.log("-------")
console.log(r)
console.log("-------")
