let a = 1
let b = 3

const ausgabe = (wert) => {
    console.log(wert.toUpperCase())
}

const sum = (a, b) => {
    return a + b
};

// console.log(sum(2,6))


const data = ['Manfred', 'Jochen', 'Amanda', 'Sybille', 'Tom', 'Joana'];

// data.forEach(ausgabe);

// console.log(data.map(el => el.toUpperCase()).join(", "))

const datas = [128, 7, 45, 56, 34, 23, 89, 2, 56, 35];

// console.log(datas.filter( n => n%2 == 0));


function avarage (...b){
    return b.reduce((sum,n)=>sum+n,0) /b.length 
}

// console.log(avarage(23,1,5414,12,312,312,312,65,123,12312));


let test = [
	["Bananen", 4],
	["Kiwis", 2],
	["Äpfel", 6]
]

function zeileAusgabe(fruit){
    console.log("Es hat " + fruit[1] + " "+ fruit[0] + " in der Früchteschale")
};

// test.forEach(zeileAusgabe);

const Hotel = {
    Name: "Quay",
    Zimmer: "45" ,
    GebuchteZimmer: "12" ,
}

function freieZimmer (a,b){
    return Hotel.Zimmer - Hotel.GebuchteZimmer
}

console.log("Name: " + Hotel.Name + ", Zimmer: " + Hotel.Zimmer + ", Gebuchte Zimmer: " + Hotel.GebuchteZimmer + ", Anzal Freie Zimmer: " + freieZimmer(Hotel) )

// Ausgabe in der Konsole:
// Es hat 4 Bananen in der Früchteschale
// Es hat 2 Kiwis in der Früchteschale
// Es hat 6 Äpfel in der Früchteschale