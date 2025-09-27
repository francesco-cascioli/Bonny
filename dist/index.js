import { Startup } from "./classes/Startup.js";
import { Incentivo } from "./classes/Incentivo.js";
import { Cittadino } from "./classes/Cittadino.js";
// --- Startup ---
const startup1 = new Startup("FitTech", "App per il fitness", "App innovative per allenamenti", ["App mobile", "Coaching online"]);
const startup2 = new Startup("WearablePro", "Tecnologie wearable", "Dispositivi indossabili per sport", ["Smartwatch", "Fasce cardio"]);
const startups = [startup1, startup2];
// --- Incentivi ---
const incentivo1 = new Incentivo("INC001", "Bonus attività sportive digitali", 5000, "Startup sportive");
const incentivo2 = new Incentivo("INC002", "Sostegno wearable", 8000, "Startup wearable");
const incentivi = [incentivo1, incentivo2];
// --- Cittadini ---
const cittadino1 = new Cittadino("Mario", "Rossi", 30, ["Calcio", "Palestra"]);
const cittadino2 = new Cittadino("Giulia", "Bianchi", 25, ["Yoga", "Running"]);
const cittadini = [cittadino1, cittadino2];
// --- Logica ---
incentivo1.assegnaAStartup(startup1);
incentivo2.assegnaAStartup(startup2);
cittadino1.partecipaAttività(startup1);
cittadino2.partecipaAttività(startup2);
// --- Rendering DOM ---
function render() {
    const startupTable = document.querySelector("#startup-table tbody");
    startupTable.innerHTML = "";
    startups.forEach(s => {
        const row = `<tr>
      <td>${s.nome}</td>
      <td>${s.settoreFocus}</td>
      <td>${s.descrizione}</td>
      <td>${s.prodottiServizi.join(", ")}</td>
      <td>${s.incentiviRicevuti.map(i => i.codice).join(", ") || "Nessuno"}</td>
    </tr>`;
        startupTable.insertAdjacentHTML("beforeend", row);
    });
    const incentiviTable = document.querySelector("#incentivi-table tbody");
    incentiviTable.innerHTML = "";
    incentivi.forEach(i => {
        const row = `<tr>
      <td>${i.codice}</td>
      <td>${i.descrizione}</td>
      <td>€${i.valore}</td>
      <td>${i.criteriEleggibilita}</td>
      <td>
        <select>${startups.map(s => `<option value="${s.nome}">${s.nome}</option>`).join("")}</select>
        <button class="btn btn-sm btn-primary">Assegna</button>
      </td>
    </tr>`;
        incentiviTable.insertAdjacentHTML("beforeend", row);
    });
    const cittadiniTable = document.querySelector("#cittadini-table tbody");
    cittadiniTable.innerHTML = "";
    cittadini.forEach(c => {
        const row = `<tr>
      <td>${c.nome}</td>
      <td>${c.cognome}</td>
      <td>${c.eta}</td>
      <td>${c.interessiSportivi.join(", ")}</td>
    </tr>`;
        cittadiniTable.insertAdjacentHTML("beforeend", row);
    });
}
render();
//# sourceMappingURL=index.js.map