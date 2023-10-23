import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnonceServiceService } from '../annonce-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-annonce-liste',
  templateUrl: './annonce-liste.component.html',
  styleUrls: ['./annonce-liste.component.scss'],
})
export class AnnonceListeComponent  implements OnInit {
  public data: any[]=[];
  router: any;
  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }

public nombre_annonce!: number;
  constructor( private alertController: AlertController, private _service : AnnonceServiceService) {
   }

  ngOnInit() {
    this.nombre_annonce = this.data.length;
    this._service.getAnnonce().forEach((element) => {
      this.data.push(element);});
      this.nombre_annonce = this.data.length;

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
      this.nombre_annonce = this.data.length-1;
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

