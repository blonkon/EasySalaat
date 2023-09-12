import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FrequenceRadioService } from '../frequence-radio.service';

@Component({
  selector: 'app-liste-frequence-radio',
  templateUrl: './liste-frequence-radio.component.html',
  styleUrls: ['./liste-frequence-radio.component.scss'],
})
export class ListeFrequenceRadioComponent  implements OnInit {

  public data: any[]=[];
  
  public nombre_fm!: number;
    constructor( private alertController: AlertController, private _service : FrequenceRadioService) {
     }
  
    ngOnInit() {
      this.nombre_fm = this.data.length;
      this._service.getradioList().forEach((element) => {
        this.data.push(element);});
        this.nombre_fm = this.data.length;
        
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
        this.nombre_fm = this.data.length-1;
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
