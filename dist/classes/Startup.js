export class Startup {
    constructor(nome, settoreFocus, descrizione, prodottiServizi) {
        this.incentiviRicevuti = [];
        this.nome = nome;
        this.settoreFocus = settoreFocus;
        this.descrizione = descrizione;
        this.prodottiServizi = prodottiServizi;
    }
    riceviIncentivo(incentivo) {
        this.incentiviRicevuti.push(incentivo);
    }
}
//# sourceMappingURL=Startup.js.map