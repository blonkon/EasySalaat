import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoranService {
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();


  triggerUpdate() {
    this.updateEvent.next();
  }
  list_coran: any =[
    {name: 'AL‑FATIHA', img: "../../assets/images/coran.png"},
    {name: 'AL‑BAQARA', img: "../../assets/images/coran.png"},
    {name: 'AL‑IMRAN', img: "../../assets/images/coran.png"},
    {name: 'AL‑FATIHA', img: "../../assets/images/coran.png"},
    {name: 'AL‑BAQARA', img: "../../assets/images/coran.png"},
    {name: 'AL‑IMRAN', img: "../../assets/images/coran.png"},
    {name: 'AL‑FATIHA', img: "../../assets/images/coran.png"},
    {name: 'AL‑BAQARA', img: "../../assets/images/coran.png"},
    {name: 'AL‑IMRAN', img: "../../assets/images/coran.png"},
    {name: 'AL‑FATIHA', img: "../../assets/images/coran.png"},
    {name: 'AL‑BAQARA', img: "../../assets/images/coran.png"},
    {name: 'AL‑IMRAN', img: "../../assets/images/coran.png"},
    {name: 'AL‑FATIHA', img: "../../assets/images/coran.png"},
    {name: 'AL‑BAQARA', img: "../../assets/images/coran.png"},
    {name: 'AL‑IMRAN', img: "../../assets/images/coran.png"},
    {name: 'AL‑FATIHA', img: "../../assets/images/coran.png"},
    {name: 'AL‑BAQARA', img: "../../assets/images/coran.png"},
    {name: 'AL‑IMRAN', img: "../../assets/images/coran.png"},
    {name: 'AL‑FATIHA', img: "../../assets/images/coran.png"},
    {name: 'AL‑BAQARA', img: "../../assets/images/coran.png"},
    {name: 'AL‑IMRAN', img: "../../assets/images/coran.png"},
    {name: 'AL‑FATIHA', img: "../../assets/images/coran.png"},
    {name: 'AL‑BAQARA', img: "../../assets/images/coran.png"},
    {name: 'AL‑IMRAN', img: "../../assets/images/coran.png"},


  ];
 id:string="";
 nom:string="";
  constructor() { }

  getUtilisateurList(): Observable<any> {
    return this.list_coran;
  }

  deleteUtilisateur(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:3000/employees/${id}`);
    return this.list_coran.splice(id);
  }

  // Méthode pour mettre à jour une mesure existante
  modifyUtilisateur(id: number, data:any): void {
      // return this._http.put(`http://localhost:3000/employees/${id}`, data);
    const index = this.list_coran.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) {
      this.list_coran[index] = data;
    }
  }
}
