import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { LecteurService } from 'src/app/lecteur.service';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.scss'],
})
export class LecteurComponent  implements OnInit {
  public data: any[]=[];
  router: any;
  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }

public nombre_lecteur!: number;
  constructor( private alertController: AlertController, private _service : LecteurService) {
   }

  ngOnInit() {
    this.nombre_lecteur = this.data.length;
    this._service.getUtilisateurList().forEach((element) => {
      this.data.push(element);});
      this.nombre_lecteur = this.data.length;

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
      this.nombre_lecteur = this.data.length-1;
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
