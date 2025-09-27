import { IStartup } from "./IStartup";

export interface ICittadino {
  nome: string;
  cognome: string;
  eta: number;
  interessiSportivi: string[];
  partecipaAttività(startup: IStartup): void;
}
