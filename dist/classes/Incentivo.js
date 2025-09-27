export class Incentivo {
    constructor(codice, descrizione, valore, criteriEleggibilita) {
        this.codice = codice;
        this.descrizione = descrizione;
        this.valore = valore;
        this.criteriEleggibilita = criteriEleggibilita;
    }
    assegnaAStartup(startup) {
        startup.riceviIncentivo(this);
    }
}
//# sourceMappingURL=Incentivo.js.map