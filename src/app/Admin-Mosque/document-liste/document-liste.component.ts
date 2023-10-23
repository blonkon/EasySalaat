import { Component, OnInit } from '@angular/core';
import { DocumentServiceService } from '../document-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-document-liste',
  templateUrl: './document-liste.component.html',
  styleUrls: ['./document-liste.component.scss'],
})
export class DocumentListeComponent  implements OnInit {

  public data:any[]=[]
  router: any;
  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }
  public nombre_document!: number;
  constructor(private alertController: AlertController, private _service : DocumentServiceService) { }

  ngOnInit() {
    this.nombre_document = this.data.length;
    this._service.getDocument().forEach((element) => {
      this.data.push(element);});
      this.nombre_document= this.data.length;
  
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
        this.nombre_document = this.data.length-1;
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
