import { Component, Injectable, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UtilisateurService } from '../utilisateur.service';
import { ModifierutilisateurComponent } from '../modifierutilisateur/modifierutilisateur.component';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
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
  
public nombre_utilisateur!: number;
  constructor( private alertController: AlertController, private _service : UtilisateurService,private router : Router) {
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
    text: 'Cancel',
    role: 'cancel',
    handler: () => {
      
      console.log('Alert canceled');
    },
  },
  {
    text: 'OK',
    role: 'confirm',
    handler: (i: number) => {
      this.data.splice(i, 1);
      this.nombre_utilisateur = this.data.length-1;
      console.log('Alert confirmed');
    },
  },
];
async presentAlert() {
  const alert = await this.alertController.create({
    header: 'Voulez vous supprimer ?',
    buttons: this.alertButtons,
  });

  await alert.present();
}

setResult(ev:any) {
  console.log(`Dismissed with role: ${ev.detail.role}`);
}

}