import { Component, Injectable, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UtilisateurService } from '../utilisateur.service';
import { ModifierutilisateurComponent } from '../modifierutilisateur/modifierutilisateur.component';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { Firestore, deleteDoc, doc, getDoc } from '@angular/fire/firestore';
import { DetailutilisateurComponent } from '../detailutilisateur/detailutilisateur.component';
import { Auth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { FirebaseApp } from '@angular/fire/app';
import { DataService } from 'src/app/service/data.service';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-listutilisateur',
  templateUrl: './listutilisateur.component.html',
  styleUrls: ['./listutilisateur.component.scss'],
})
export class ListutilisateurComponent  implements OnInit {
public data: any[]=[];
detailsForUser:{
  nom:string,
  email:string
}={
  nom:"",
  email:""
}
  
public nombre_utilisateur!: number;
  constructor( private alertController: AlertController,private data1 : DataService, private firebase: Auth,private _service : UtilisateurService,private router : Router,private firestore:Firestore) {
   }

  async ngOnInit() {
      this.liste();
  }
  async liste(){
    this.nombre_utilisateur = this.data.length;
    (await this._service.getUtilisateurList()).forEach((element) => {
      this.data.push(element);
    });
    console.log(this.data[0])
      this.nombre_utilisateur = this.data[0].length;
  }
  detail(id : string,nom : string){
    this._service.userdetails=id;
    this._service.usernom=nom;
    this.router.navigate(['admin/accueilsuperadmin/modifierutilisateur'])
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
      this.nombre_utilisateur = this.nombre_utilisateur-1;
      const documentRef = doc(this.firestore, 'Users', id);
        const firebaseUser = await getDoc(documentRef);
        if (firebaseUser.exists()) {
         let eemail = firebaseUser.data()['email'];
         let  emdp = firebaseUser.data()['motdepasse'];
          this.data1.DeleteUser(eemail,emdp);
        }
      await deleteDoc(doc(this.firestore, "Users", id));
      await deleteDoc(doc(this.firestore,"Mosques",id));
    
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

detailuser(nom : string,email:string){
  this._service.detailsForUser.nom=nom;
  this._service.detailsForUser.email=email;
  this.router.navigate(['/admin/accueilsuperadmin/detailutilisateur'])
}

}