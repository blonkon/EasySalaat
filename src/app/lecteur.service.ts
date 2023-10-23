import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query, where } from '@angular/fire/firestore';
import { Observable, Subject, of } from 'rxjs';

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
    // {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    // {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    // {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    // {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    // {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    // {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    // {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    // {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    // {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    // {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    // {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    // {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    // {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    // {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    // {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    // {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},
    // {name: 'Mahi Ouattara', img: "../../assets/images/user.png"},
    // {name: 'Abdoulaye Koita', img: "../../assets/images/user.png"},


  ];

  constructor(private firestore : Firestore) { }

  async getUtilisateurList(): Promise<Observable<any>> {
    this.list_lecteur=[];
    const q = query(collection(this.firestore, "Lecteurs"));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
      let user : any = {
        id:doc.id,
        nom : doc.data()['nom'],
        // email : doc.data()['email'],
        // motdepasse : "",
        // role : doc.data()['role']
      };
      this.list_lecteur.push(user)
    });
    return of(this.list_lecteur);
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
