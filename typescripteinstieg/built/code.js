const elementClicked = (e) => {
    console.log("list clicked");
    let element = e.target;
    while (element.tagName != "LI") {
        if (element.parentElement) {
            element = element.parentElement;
        }
        else {
            break;
        }
    }
    console.log(element);
};
const elementGeclickt = (e) => {
    console.log("clicked");
    let element = e.target;
    console.log(element);
    window.location.assign("http://chatgpt.com");
};
window.addEventListener("load", () => {
    const d1 = document.getElementById("d1");
    if (d1 !== null) {
        d1.addEventListener("click", elementGeclickt);
    }
    const b1 = document.getElementById("b1");
    b1 === null || b1 === void 0 ? void 0 : b1.addEventListener("clicked", elementGeclickt);
    // beide Eventlistener machen das selbe "?" ist kurzscheibweise
    const ul = document.getElementById("ul");
    ul === null || ul === void 0 ? void 0 : ul.addEventListener("click", elementClicked);
});
let strgvar = "abc";
const arr = ["a", "b", "c"];
arr[3] = "x";
const pa = {
    dozent: "Heinri",
    raum: "302"
};
const wt2 = {
    dozent: "Pilz",
    raum: "203"
};
class Kurs {
    constructor(dozent, raum) {
        this.dozent = dozent;
        this.raum = raum;
    }
}
// bespiel das eine variable mehere types sein darf!
class Kurse {
    constructor(dozent, raum = null /* Name, Type, Defaultwert */) {
        this.dozent = dozent;
        this.raum = raum;
    }
}
const wt3 = new Kurs("Steffi", "403");
const wt4 = new Kurse("Dinimom");
console.log(strgvar);
console.log(pa);
console.log(wt2);
console.log(wt3);
console.log(wt4);
console.log(window.location);
export {};
//# sourceMappingURL=code.js.map