import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdminMosqueService } from '../admin-mosque.service';

@Component({
  selector: 'app-listeadmin-mosque',
  templateUrl: './listeadmin-mosque.component.html',
  styleUrls: ['./listeadmin-mosque.component.scss'],
})
export class ListeadminMosqueComponent  implements OnInit {

  public data: any[]=[];
  
  public nombre_admin_mosque!: number;
    constructor( private alertController: AlertController, private _service : AdminMosqueService) {
     }
  
    ngOnInit() {
      this.nombre_admin_mosque = this.data.length;
      this._service.getAdmin_mosque_List().forEach((element) => {
        this.data.push(element);});
        this.nombre_admin_mosque = this.data.length;
        
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
        this.nombre_admin_mosque = this.data.length-1;
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
