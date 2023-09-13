// mosque.model.ts

export class Mosque {
    id: number;
    nom: string;
    geoPoint: [number, number];
  
    constructor(id: number, nom: string, geoPoint: [number, number]) {
      this.id = id;
      this.nom = nom;
      this.geoPoint = geoPoint;
    }
  }
  