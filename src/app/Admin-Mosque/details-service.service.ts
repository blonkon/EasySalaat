import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsServiceService {

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  triggerUpdate() {
    this.updateEvent.next();
  }
  public detailsList: any=[
    {nom: 'Lecture des 114 chapitre du coran'},
    {nom: 'Prêche'},
    {nom: 'Lecture Corannique'}
  ];
  getDetails(): Observable<any> {
    return this.detailsList
  }
  constructor() { }

  //Modifier une annonce
  modifyAnnonce(id: number, data: any): void{
    const index = this.detailsList.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) {
      this.detailsList[index] = data;
    }
  }

  // Supprimer une annonce
  deleteAnnonce(id: number): Observable<any>{
    return this.detailsList.splice(id);
  }
}


