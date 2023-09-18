import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Users } from '../models/users';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminMosqueService {

  detailsForUser:{
    nom:string,
    email:string
  }={
    nom:"",
    email:""
  }

  modifMail?:string;
  modifNom?:string;

  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }
  list_admin_mosque: any =[];

  constructor(private firestore : Firestore) { }

  async getAdmin_mosque_List(): Promise<Observable<Users[]>> {
    this.list_admin_mosque=[];
    const q = query(collection(this.firestore, "Users"), where("role", "==", 1));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      let user : any = {
        id:doc.id,
        nom : doc.data()['nom'],
        email : doc.data()['email'],
        motdepasse : "",
        role : doc.data()['role']};
      this.list_admin_mosque.push(user)
    });
    return of(this.list_admin_mosque);
    
  }


  deleteAdmin_mosque_(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:3000/employees/${id}`);
    return this.list_admin_mosque.splice(id);
  }
  
  // Méthode pour mettre à jour une mesure existante
  modifyAdmin_mosque(id: number, data:any): void {
      // return this._http.put(`http://localhost:3000/employees/${id}`, data);
    const index = this.list_admin_mosque.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) { 
      this.list_admin_mosque[index] = data;
    }
  }
}
