import { IIncentivo } from "./IIncentivo";
export interface IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiServizi: string[];
    riceviIncentivo(incentivo: IIncentivo): void;
}
//# sourceMappingURL=IStartup.d.ts.map