// mosque.service.ts

import { Injectable } from '@angular/core';
import { Mosque } from '../model/liste-mosque.model'; // Importez le modèle de Mosquée ici

@Injectable({
  providedIn: 'root'
})
export class MosqueService {
  private mosques: Mosque[] = []; // Initialisez la liste des mosquées ici

  detail : any;
  constructor() {
    // Ajoutez des mosquées fictives ici (vous pouvez également charger les données depuis une source externe)
    this.mosques.push(
      new Mosque('Mosquée Mille et une merveille', [12.63074, -8.0295731], 
      [{ titre: "prêche", description: "vendredi soir à 20h00"},{ titre: "prêche", description: "vendredi soir à 20h00" },{ titre: "prêche", description: "vendredi soir à 20h00" }], [{ titre: "prêche", description: "vendredi soir à 20h00" },{ titre: "prêche", description: "vendredi soir à 20h00" }]),
      new Mosque('Mosquée Ar Rahmane', [12.6374469, -8.0264756], [{ titre: "prêche", description: "vendredi soir à 20h00" }], [{ titre: "prêche", description: "vendredi soir à 20h00" }])

    );
  }
  // Obtenez toutes les mosquées
  getMosques(): Mosque[] {
    return this.mosques;
  }
}