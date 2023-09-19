import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { Observable, Subject, of } from 'rxjs';
import { Mosques } from '../models/Moques';

@Injectable({
  providedIn: 'root'
})
export class MosqueeService {

  detailsMosque : Mosques={
        nom : "",
        iman : "",
        admin_mail : "",
        tel:0
  };
  private updateEvent = new Subject<void>();

  update$ = this.updateEvent.asObservable();


  triggerUpdate() {
    this.updateEvent.next();
  }
  list_mosquee: any =[
    // {name: 'Ah rahman', img: "../../assets/images/mosqueeee 1.png"},
  ];


  constructor(private firestore :Firestore) { }
  async getUtilisateurList(): Promise<Observable<Mosques[]>> {
    this.list_mosquee=[];
// const q2 = query(collection(this.firestore, "Users"), where("role", "==", 0));
// const unsubscribe = onSnapshot(q2, (querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//   });
//   console.log("Changement effectuer");
//   return;
// });, where("role", "==", 0)
    const q = query(collection(this.firestore, "Mosques"));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
      let user : any = {
        id:doc.id,
        nom : doc.data()['nom'],
        iman:doc.data()['iman'],
        admin_mail : doc.data()['admin_mail'],
        tel : doc.data()['tel']};
      this.list_mosquee.push(user)
    });
    return of(this.list_mosquee);
    
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
