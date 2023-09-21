import { Component, OnInit } from '@angular/core';
import { InfoMosqueServiceService } from '../info-mosque-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-info-mosque',
  templateUrl: './info-mosque.component.html',
  styleUrls: ['./info-mosque.component.scss'],
})
export class InfoMosqueComponent  implements OnInit {
  elements = [
    { nomMosque: 'Ar Raman',nomImam: 'Mohamed Koureissi',telephone: '98673322' }
  ];

  [x: string]: any;

  public data: any[]=[];
  router: any;
  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }
  // public alertButtons = ['OK'];
  public alertInputs = [
    
    {
      type: 'text',
      placeholder: '',
    }
  ];

  public nombre_annonce!: number;
  constructor( private alertController: AlertController, private _service :InfoMosqueServiceService) {
   }
 
  ngOnInit() {
    this._service.getHoraire().forEach((element) => {
      this.data.push(element);});
      

  }

  // Heure
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Modifier Information',
      inputs: [
        {
          name: 'nom',
          type: 'text',
          placeholder: 'Enregistrer Info',
          value: this['text'], // Liez la valeur à la propriété 'heure'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'OK',
          handler: () => {
            console.log('Enregistrer Info :', this['nom']);
            // Vous pouvez maintenant utiliser this.nom pour enregistrer les informations
          },
        },
      ],
    });
  
    await alert.present();
  }

}
