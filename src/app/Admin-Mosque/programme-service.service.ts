import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeServiceService {

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  triggerUpdate() {
    this.updateEvent.next();
  }
  private programmeList :any=[
     {titre : 'Prêche', jour: 'Lundi', heure: '16h-18h' },
     {titre : 'Tafsir',jour: 'Mardi' ,heure: '10h-12h' },
     
  ]
  constructor() { }
    getProgramme(): Observable<any>{
      return this.programmeList;
    }
  
    //Modifier une horaire
    modifyHoraire(id: number, data: any): void{
      const index = this.programmeList.findIndex((meas:any) => meas.id === id);
      // Si l'indice est trouvé, mettez à jour la mesure
        if (index !== -1) {
        this.programmeList[index] = data;
      }
    }
}
