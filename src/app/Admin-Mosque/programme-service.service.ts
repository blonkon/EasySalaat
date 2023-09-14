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
     {titre : 'Batème Maouloud', dateTime: '21/11/2023' },
     {titre : 'Prèche Maouloud',dateTime: '21/11/2023'  },
     {titre : 'Doua',dateTime: '21/11/2023'  },
     {titre : 'Quiz',dateTime: '21/11/2023'  }
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
