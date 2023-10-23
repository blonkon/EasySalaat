import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  triggerUpdate() {
    this.updateEvent.next();
  }
  public documentList: any=[
    {nom: 'Audio Prêche'},
    {nom: 'Video Prêche'},
    {nom: 'Lecture Corannique'}
  ];
  getDocument(): Observable<any> {
    return this.documentList
  }
  constructor() { }

  //Modifier une annonce
  modifyAnnonce(id: number, data: any): void{
    const index = this.documentList.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) {
      this.documentList[index] = data;
    }
  }

  // Supprimer une annonce
  deleteAnnonce(id: number): Observable<any>{
    return this.documentList.splice(id);
  }
}
