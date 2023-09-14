import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MosqueeService {
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();


  triggerUpdate() {
    this.updateEvent.next();
  }
  list_mosquee: any =[
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
    {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},


  ];


  constructor() { }
  getUtilisateurList(): Observable<any> {
    return this.list_mosquee;
  }

  deleteUtilisateur(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:3000/employees/${id}`);
    return this.list_mosquee.splice(id);
  }

  // Méthode pour mettre à jour une mesure existante
  modifyUtilisateur(id: number, data:any): void {
      // return this._http.put(`http://localhost:3000/employees/${id}`, data);
    const index = this.list_mosquee.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) {
      this.list_mosquee[index] = data;
    }
  }
}
