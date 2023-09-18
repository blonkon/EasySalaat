import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Users } from '../models/users';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  detailsForUser:{
    nom:string,
    email:string
  }={
    nom:"",
    email:""
  }

  userdetails : string="";
  usernom : string="";
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }
  list_admin: any =[];

  constructor(private firestore :Firestore) { }

  async getAdminList() : Promise<Observable<Users[]>> {
    this.list_admin=[];
// const q2 = query(collection(this.firestore, "Users"), where("role", "==", 0));
// const unsubscribe = onSnapshot(q2, (querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//   });
//   console.log("Changement effectuer");
//   return;
// });
    const q = query(collection(this.firestore, "Users"), where("role", "==", 2));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
      let user : any = {
        id:doc.id,
        nom : doc.data()['nom'],
        email : doc.data()['email'],
        motdepasse : "",
        role : doc.data()['role']};
      this.list_admin.push(user)
    });
    return of(this.list_admin);
    
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
