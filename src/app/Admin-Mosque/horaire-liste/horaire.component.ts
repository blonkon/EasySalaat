import { Component, OnInit } from '@angular/core';
import { HoraireServiceService } from '../horaire-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.scss'],
})
export class HoraireComponent  implements OnInit {
  [x: string]: any;

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

  // Heure
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Modifier heure',
      inputs: [
        {
          name: 'heure',
          type: 'time',
          placeholder: 'Sélectionnez une heure',
          value: this['time'], // Liez la valeur à la propriété 'heure'
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
            console.log('Heure sélectionnée :', this['time']);
            // Vous pouvez maintenant utiliser this.heure pour enregistrer l'heure où vous le souhaitez
          },
        },
      ],
    });
  
    await alert.present();
  }
 
  }
  
