import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnonceServiceService {

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  triggerUpdate() {
    this.updateEvent.next();
  }
  private annonceTab: any= [
    {titre : 'Preche-Réligieuse', dateTime : '12/10/2023 - 14H00'},
    {titre : 'Cérémonie-Réligieuse', dateTime : '12/10/2023 - 14H00'},
    {titre : 'Lecture-corannique', dateTime : '12/10/2023 - 14H00'},
    {titre : 'Preche-Réligieuse', dateTime : '12/10/2023 - 14H00'},
    {titre : 'Preche-Réligieuse', dateTime : '12/10/2023 - 14H00'},
    {titre : 'Preche-Réligieuse', dateTime : '12/10/2023 - 14H00'},
    {titre : 'Preche-Réligieuse', dateTime : '12/10/2023 - 14H00'},
    {titre : 'Preche-Réligieuse', dateTime : '12/10/2023 - 14H00'},
  ];
 
  constructor() { }
  //Methode pour lire une annonce
  getAnnonce(): Observable<any> {
    return this.annonceTab
  }
  addAnnonce(annonce: any){
    this.annonceTab.push(annonce);
  }

  //Modifier une annonce
  modifyAnnonce(id: number, data: any): void{
    const index = this.annonceTab.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) {
      this.annonceTab[index] = data;
    }
  }

  // Supprimer une annonce
  deleteAnnonce(id: number): Observable<any>{
    return this.annonceTab.splice(id);
  }
}
