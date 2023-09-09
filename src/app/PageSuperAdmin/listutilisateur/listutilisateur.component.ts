import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UtilisateurService } from '../utilisateur.service';

import { ModifierutilisateurComponent } from '../modifierutilisateur/modifierutilisateur.component';
@Component({
  selector: 'app-listutilisateur',
  templateUrl: './listutilisateur.component.html',
  styleUrls: ['./listutilisateur.component.scss'],
})
export class ListutilisateurComponent  implements OnInit {
public data: any[]=[];
  
public nombre_utilisateur!: number;
  constructor( private alertController: AlertController, private _service : UtilisateurService) {
   }

  ngOnInit() {
    this.nombre_utilisateur = this.data.length;
    this._service.getUtilisateurList().forEach((element) => {
      this.data.push(element);});
      this.nombre_utilisateur = this.data.length;
      
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
    header: 'Alert!',
    buttons: this.alertButtons,
  });

  await alert.present();
}

setResult(ev:any) {
  console.log(`Dismissed with role: ${ev.detail.role}`);
}



}