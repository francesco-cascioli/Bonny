import { IStartup } from "../interfaces/IStartup";
import { IIncentivo } from "../interfaces/IIncentivo";
export declare class Startup implements IStartup {
    nome: string;
    settoreFocus: string;
    descrizione: string;
    prodottiServizi: string[];
    incentiviRicevuti: IIncentivo[];
    constructor(nome: string, settoreFocus: string, descrizione: string, prodottiServizi: string[]);
    riceviIncentivo(incentivo: IIncentivo): void;
}
//# sourceMappingURL=Startup.d.ts.map