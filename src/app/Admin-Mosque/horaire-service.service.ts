import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoraireServiceService {

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  triggerUpdate() {
    this.updateEvent.next();
  }
  private horaireList: any=[
    {nom: 'Fajr', time:'05H20mn'},
    {nom: 'Chorouq', time:'10H00mn'},
    {nom: 'Dohr', time:'13H30mn'},
    {nom: 'Asr', time:'16H00mn'},
    {nom: 'Maghreb', time:'18H40mn'},
    {nom: 'Icha', time:'19H55mn'},
    {nom: 'Djumah', time:'13H00mn'},
  ]
  constructor() {}
    getHoraire(): Observable<any> {
      return this.horaireList
    }
    //Modifier une horaire
  modifyHoraire(id: number, data: any): void{
    const index = this.horaireList.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) {
      this.horaireList[index] = data;
    }
  }

   }


