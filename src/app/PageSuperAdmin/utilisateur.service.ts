import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { Firestore, addDoc, collection,doc, setDoc,getFirestore, getDoc, where, query, getDocs, onSnapshot } from '@angular/fire/firestore';
import { Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})

export class UtilisateurService {

  userdetails : string="";
  usernom : string="";
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();
  

  triggerUpdate() {
    this.updateEvent.next();
  }

  list_utilisateur: Users[] =[ 
  ];

  constructor( private firestore : Firestore) { 
     }

  async getUtilisateurList(): Promise<Observable<Users[]>> {
    this.list_utilisateur=[];
// const q2 = query(collection(this.firestore, "Users"), where("role", "==", 0));
// const unsubscribe = onSnapshot(q2, (querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//   });
//   console.log("Changement effectuer");
//   return;
// });
    const q = query(collection(this.firestore, "Users"), where("role", "==", 0));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
      let user : Users = {
        nom : doc.data()['nom'],
        email : doc.data()['email'],
        motdepasse : "",
        role : doc.data()['role']};
      this.list_utilisateur.push(user)
    });
    return of(this.list_utilisateur);
    
  }

  deleteUtilisateur(id: number): Observable<any> {
    // return this._http.delete(`http://localhost:3000/employees/${id}`);
    // return this.list_utilisateur.splice(id);
    return of(this.list_utilisateur);
  }
  
  // Méthode pour mettre à jour une mesure existante
  modifyUtilisateur(id: number, data:any): void {
      // return this._http.put(`http://localhost:3000/employees/${id}`, data);
    const index = this.list_utilisateur.findIndex((meas:any) => meas.id === id);
    // Si l'indice est trouvé, mettez à jour la mesure
      if (index !== -1) { 
      this.list_utilisateur[index] = data;
    }
  }

}
