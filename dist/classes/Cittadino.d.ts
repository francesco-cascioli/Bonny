import { ICittadino } from "../interfaces/ICittadino";
import { IStartup } from "../interfaces/IStartup";
export declare class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];
    constructor(nome: string, cognome: string, eta: number, interessiSportivi: string[]);
    partecipaAttività(startup: IStartup): void;
}
//# sourceMappingURL=Cittadino.d.ts.map