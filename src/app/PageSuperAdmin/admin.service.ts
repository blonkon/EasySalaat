import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }
  list_admin: any =[
    // {name: 'Amidou traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    // {name: 'Adama traore', img: "../../assets/images/User1.png"},
    {name: 'Adama traore', img: "../../assets/images/User1.png"},
    {name: 'Adama traore', img: "../../assets/images/User1.png"},
    {name: 'Adama traore', img: "../../assets/images/User1.png"},
    {name: 'Adama traore', img: "../../assets/images/User1.png"},
  ];

  constructor() { }

  getAdminList(): Observable<any> {
    return this.list_admin;
  }

  deleteAdmin(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:3000/employees/${id}`);
    return this.list_admin.splice(id);
  }
  
  // Méthode pour mettre à jour une mesure existante
  modifyAdmin(id: number, data:any): void {
      // return this._http.put(`http://localhost:3000/employees/${id}`, data);
    const index = this.list_admin.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) { 
      this.list_admin[index] = data;
    }
  }
}
