class Reisen {
    constructor (kennzeichen, fahrer, mitfahrer){
    this.kennzeichen = kennzeichen;
    this.fahrer = fahrer;
    this.mitfahrer = mitfahrer

}
    AnzahlSitzplaetze() {
        return "Es fahren: " + 
        this.mitfahrer.length + 
        " Leute im Bus mit.";
    }
}

export { Reisen };