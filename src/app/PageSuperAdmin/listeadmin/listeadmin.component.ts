import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-listeadmin',
  templateUrl: './listeadmin.component.html',
  styleUrls: ['./listeadmin.component.scss'],
})
export class ListeadminComponent  implements OnInit {

  public data: any[]=[];
  
  public nombre_admin!: number;
    constructor( private alertController: AlertController, private _service : AdminService) {
     }
  
    ngOnInit() {
      this.nombre_admin = this.data.length;
      this._service.getAdminList().forEach((element) => {
        this.data.push(element);});
        this.nombre_admin = this.data.length;
        
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
        this.nombre_admin = this.data.length-1;
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
