import { IStartup } from "./IStartup";

export interface IIncentivo {
  codice: string;
  descrizione: string;
  valore: number;
  criteriEleggibilita: string;
  assegnaAStartup(startup: IStartup): void;
}
