import { Component, OnInit } from '@angular/core';
import { HoraireServiceService } from '../horaire-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.scss'],
})
export class HoraireComponent  implements OnInit {

  public data: any[]=[];
  router: any;
  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }
  // public alertButtons = ['OK'];
  public alertInputs = [
    
    {
      type: 'time',
      placeholder: '',
    }
  ];

  public nombre_annonce!: number;
  constructor( private alertController: AlertController, private _service : HoraireServiceService) {
   }
 
  ngOnInit() {
    this._service.getHoraire().forEach((element) => {
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
