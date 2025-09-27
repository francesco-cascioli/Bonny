export class Cittadino {
    constructor(nome, cognome, eta, interessiSportivi) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }
    partecipaAttività(startup) {
        console.log(`${this.nome} ${this.cognome} partecipa alle attività di ${startup.nome}`);
    }
}
//# sourceMappingURL=Cittadino.js.map