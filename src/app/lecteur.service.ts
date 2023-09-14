import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LecteurService {
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();


  triggerUpdate() {
    this.updateEvent.next();
  }
  list_lecteur: any =[
    {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},


  ];

  constructor() { }

  getUtilisateurList(): Observable<any> {
    return this.list_lecteur;
  }

  deleteUtilisateur(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:3000/employees/${id}`);
    return this.list_lecteur.splice(id);
  }

  // Méthode pour mettre à jour une mesure existante
  modifyUtilisateur(id: number, data:any): void {
      // return this._http.put(`http://localhost:3000/employees/${id}`, data);
    const index = this.list_lecteur.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) {
      this.list_lecteur[index] = data;
    }
  }
}
