import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdminMosqueService } from '../admin-mosque.service';
import { Router } from '@angular/router';
import { Firestore, deleteDoc, doc, getDoc } from '@angular/fire/firestore';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-listeadmin-mosque',
  templateUrl: './listeadmin-mosque.component.html',
  styleUrls: ['./listeadmin-mosque.component.scss'],
})
export class ListeadminMosqueComponent  implements OnInit {

  public data: any[]=[];
  
  public nombre_admin_mosque!: number;
    constructor( private alertController: AlertController,private data1 : DataService,private router:Router, private _service : AdminMosqueService,private firestore :Firestore) {
     }
  
    async ngOnInit() {
      this.data=[]
      this.nombre_admin_mosque = this.data.length;
      (await this._service.getAdmin_mosque_List()).forEach((element) => {
        this.data.push(element);
      });
        this.nombre_admin_mosque = this.data[0].length;
        
    }
  
    detail(mail : string,nom : string){
      this._service.modifMail=mail;
      this._service.modifNom=nom;
      this.router.navigate(['admin/accueilsuperadmin/modifieradminmos'])
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
        text: 'oui',
        role: 'confirm',
        handler: async (id: string) => {
          // this.data.splice(id, 1);
          this.nombre_admin_mosque--;
          const documentRef = doc(this.firestore, 'Users', id);
        const firebaseUser = await getDoc(documentRef);
        if (firebaseUser.exists()) {
         let eemail = firebaseUser.data()['email'];
         let  emdp = firebaseUser.data()['motdepasse'];
          this.data1.DeleteUser(eemail,emdp);
        }
          await deleteDoc(doc(this.firestore, "Users", id));
          await deleteDoc(doc(this.firestore,"Mosques",id));
          console.log('Alert confirmed this is '+id);
        },
      },
    ];
    async presentAlert(id : string) {
      const alert = await this.alertController.create({
        header: 'Voulez vous supprimer ?',
        buttons:  [
          {
            text: 'Non',
            role: 'cancel',
            handler: () => {
              console.log('Alert canceled');
            },
          },
          {
            text: 'Oui',
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
  detailuser(nom : string,email:string){
    this._service.detailsForUser.nom=nom;
    this._service.detailsForUser.email=email;
    this.router.navigate(['/admin/accueilsuperadmin/detailadminmos'])
  }
}
