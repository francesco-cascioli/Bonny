import { IIncentivo } from "../interfaces/IIncentivo";
import { IStartup } from "../interfaces/IStartup";

export class Incentivo implements IIncentivo {
  codice: string;
  descrizione: string;
  valore: number;
  criteriEleggibilita: string;

  constructor(codice: string, descrizione: string, valore: number, criteriEleggibilita: string) {
    this.codice = codice;
    this.descrizione = descrizione;
    this.valore = valore;
    this.criteriEleggibilita = criteriEleggibilita;
  }

  assegnaAStartup(startup: IStartup): void {
    startup.riceviIncentivo(this);
  }
}
