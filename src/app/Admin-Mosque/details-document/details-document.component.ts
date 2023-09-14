import { Component, OnInit } from '@angular/core';
import { DetailsServiceService } from '../details-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details-document',
  templateUrl: './details-document.component.html',
  styleUrls: ['./details-document.component.scss'],
})
export class DetailsDocumentComponent  implements OnInit {

  public data :any[]=[];
  router: any;
  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }
  public nombre_details!: number;
  constructor(private alertController: AlertController, private _service : DetailsServiceService) { }

  ngOnInit() {
    this.nombre_details = this.data.length;
    this._service.getDetails().forEach((element) => {
      this.data.push(element);});
      this.nombre_details= this.data.length;
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
        this.nombre_details = this.data.length-1;
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
