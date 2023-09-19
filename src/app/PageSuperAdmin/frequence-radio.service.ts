import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrequenceRadioService {

  
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }
  list_radio: any =[
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    {name: 'Radio Islamique', frequence: 100.1},
    
  ];

  constructor() { }

  getradioList(): Observable<any> {
    return this.list_radio;
  }

  deleteradio(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:3000/employees/${id}`);
    return this.list_radio.splice(id);
  }
  
  // Méthode pour mettre à jour une mesure existante
  modifyradio(id: number, data:any): void {
      // return this._http.put(`http://localhost:3000/employees/${id}`, data);
    const index = this.list_radio.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) { 
      this.list_radio[index] = data;
    }
  }
}
