function istGerade(zahl) {
  if (zahl % 2 == 0) return true;
  else return false;
}

console.log(istGerade(2));
console.log(istGerade(1));

let zahl = 2; // js ist nicht typisiert also kann hier auch ein string werden wenn später zahl == haus wird
const wort = "baum"; // mit const wird gesperrt das diese Variable angepasst werden kann
var zahl2 = 1; // das selbe wie let nur alte symantik

let zahlen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function FilterGerade(i) {
  if (i % 2 == 0) return true;
  else return false;
}

for (let i = 0; i < 11; i++) {
  if (FilterGerade(zahlen[i])) {
    console.log(i);
  }
}
