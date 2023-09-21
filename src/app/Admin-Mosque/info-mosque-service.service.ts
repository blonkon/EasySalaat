import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoMosqueServiceService {

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  triggerUpdate() {
    this.updateEvent.next();
  }
  private InfoList: any=[
    { nomMosque: 'Rassoul'},
    {nomImam: 'Mohamed Koureissi'},
    // {nomMosque: 'Ar-Rahman'},
    // {nomImam: 'Abdoulaye Koita'}
  ];
  constructor() {}
    getHoraire(): Observable<any> {
      return this.InfoList
    }
    //Modifier une horaire
  modifyHoraire(id: number, data: any): void{
    const index = this.InfoList.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) {
      this.InfoList[index] = data;
    }
  }
}
