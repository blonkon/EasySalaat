import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CoranService } from '../coran.service';

@Component({
  selector: 'app-coran',
  templateUrl: './coran.component.html',
  styleUrls: ['./coran.component.scss'],
})
export class CoranComponent  implements OnInit {

  public data: any[]=[];
  router: any;
  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }

public nombre_mosquee!: number;
  constructor( private alertController: AlertController, private _service : CoranService) {
   }

  ngOnInit() {
    this.nombre_mosquee = this.data.length;
    this._service.getUtilisateurList().forEach((element) => {
      this.data.push(element);});
      this.nombre_mosquee = this.data.length;

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
      this.nombre_mosquee = this.data.length-1;
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
