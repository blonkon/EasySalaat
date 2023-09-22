import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, query } from '@angular/fire/firestore';
import { Observable, Subject, of } from 'rxjs';

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
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    // {name: 'Radio Islamique', frequence: 100.1},
    
  ];

  constructor(private firestore : Firestore) { }

  async getradioList(): Promise<Observable<any>> {
    const q = query(collection(this.firestore, "Radios"));
    const querySnapshot = await getDocs(q);
     querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data());
      let user : any = {
        id:doc.id,
        nom : doc.data()['nom'],
        frequence:doc.data()['frequence']};
      this.list_radio.push(user)
    });
    return of(this.list_radio);
    
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
