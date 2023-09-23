import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LecteurService } from 'src/app/lecteur.service';
import { CoranService } from '../coran.service';

@Component({
  selector: 'app-lecteur',
  templateUrl: './lecteur.component.html',
  styleUrls: ['./lecteur.component.scss'],
})
export class LecteurComponent  implements OnInit {
  public data: any[]=[];
  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }

public nombre_lecteur!: number;
  constructor( private alertController: AlertController,private router : Router, private coran : CoranService,private _service : LecteurService) {
   }

   thisElement(id : string,nom :string){
    this.coran.id=id;
    this.coran.nom=nom;
    this.router.navigate(["admin/accueilsuperadmin/coran"]);
   }


  async ngOnInit() {
    this.nombre_lecteur = this.data.length;
    (await this._service.getUtilisateurList()).forEach((element) => {
      this.data.push(element);});
      this.nombre_lecteur = this.data[0].length;

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
