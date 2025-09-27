import { IStartup } from "../interfaces/IStartup";
import { IIncentivo } from "../interfaces/IIncentivo";

export class Startup implements IStartup {
  nome: string;
  settoreFocus: string;
  descrizione: string;
  prodottiServizi: string[];
  incentiviRicevuti: IIncentivo[] = [];

  constructor(nome: string, settoreFocus: string, descrizione: string, prodottiServizi: string[]) {
    this.nome = nome;
    this.settoreFocus = settoreFocus;
    this.descrizione = descrizione;
    this.prodottiServizi = prodottiServizi;
  }

  riceviIncentivo(incentivo: IIncentivo): void {
    this.incentiviRicevuti.push(incentivo);
  }
}
