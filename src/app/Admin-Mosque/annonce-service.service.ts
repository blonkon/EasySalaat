import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {

  private annonceTab: any[]= [];

  constructor() { }
  getAnnonce(){
    return this.annonceTab
  }
  addAnnonce(annonce: any){
    this.annonceTab.push(annonce);
  }
  editAnnonce(id: number, newTab: any){
    this.annonceTab[id]= newTab;
  }
  deleteAnnonce(id: number){
    this.annonceTab.splice(id, 1);
  }
}
