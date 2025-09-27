import { IIncentivo } from "../interfaces/IIncentivo";
import { IStartup } from "../interfaces/IStartup";
export declare class Incentivo implements IIncentivo {
    codice: string;
    descrizione: string;
    valore: number;
    criteriEleggibilita: string;
    constructor(codice: string, descrizione: string, valore: number, criteriEleggibilita: string);
    assegnaAStartup(startup: IStartup): void;
}
//# sourceMappingURL=Incentivo.d.ts.map