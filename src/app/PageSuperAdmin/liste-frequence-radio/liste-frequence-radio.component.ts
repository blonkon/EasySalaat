import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FrequenceRadioService } from '../frequence-radio.service';
import { Firestore, deleteDoc, doc, getDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-liste-frequence-radio',
  templateUrl: './liste-frequence-radio.component.html',
  styleUrls: ['./liste-frequence-radio.component.scss'],
})
export class ListeFrequenceRadioComponent  implements OnInit {

  public data: any[]=[];
  
  public nombre_fm!: number;
    constructor( private alertController: AlertController,private firestore : Firestore, private _service : FrequenceRadioService) {
     }
  
    async ngOnInit() {
      this.nombre_fm = this.data.length;
      (await this._service.getradioList()).forEach((element) => {
        this.data.push(element);});
        this.nombre_fm = this.data[0].length;
        
    }
  
    public alertButtons = [
      {
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          
          console.log('Alert canceled');
        },
      },
      {
        text: 'OK',
        role: 'confirm',
        handler: async (id: string) => {
          // this.data.splice(id, 1);
          this.nombre_fm--;
          // const documentRef = doc(this.firestore, 'Radios', id);
          //   const firebaseUser = await getDoc(documentRef);
          //   if (firebaseUser.exists()) {
          //    let eemail = firebaseUser.data()['email'];
          //    let  emdp = firebaseUser.data()['motdepasse'];
          //     this.data1.DeleteUser(eemail,emdp);
          //   }
          await deleteDoc(doc(this.firestore, "Radios", id));
          // await deleteDoc(doc(this.firestore,"Mosques",id));
        
        }
      }
    ];
    async presentAlert(id : string) {
      const alert = await this.alertController.create({
        header: 'Voulez vous supprimer ?',
        buttons:  [
          {
            text: 'Annuler',
            role: 'cancel',
            handler: () => {
              console.log('Alert canceled');
            },
          },
          {
            text: 'OK',
            role: 'confirm',
            handler: () => {
              this.alertButtons[1].handler(id)
              // this.data.splice(id, 1);
              // this.nombre_utilisateur = this.data.length-1;
              // console.log('Alert confirmed');
            },
          },
        ]
      });
  
    await alert.present();
  }
  
  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
  
  
}
