// liste-mosque.model.ts

export class Mosque {
    nom: string;
    geoPoint:[number, number];
    annonce: { titre: string, description: string }[];
    programme: { titre: string, description: string }[];
  
    constructor( nom: string, geoPoint: [number, number],annonce:{ titre: string, description: string }[],programme:{ titre: string, description: string }[]) {
      this.nom = nom;
      this.geoPoint = geoPoint;
      this.annonce = annonce;
      this.programme = programme;
    }
  }
  