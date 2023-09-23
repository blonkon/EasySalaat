import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CalendrierService } from '../calendrier.service';
import { DateAjoutComponent } from '../date-ajout/date-ajout.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.scss'],
})
export class CalendrierComponent  implements OnInit {

 
  public data: any[]=[];
  
  public nombre_fm!: number;
    constructor(private _dialog: MatDialog,  private alertController: AlertController, private _service : CalendrierService) {
     }
  
    ngOnInit() {
      this.nombre_fm = this.data.length;
      this._service.getdatelist().forEach((element) => {
        this.data.push(element);});
        this.nombre_fm = this.data.length;
        
    }

    private refreshData() {
      // Mettez à jour vos données (par exemple, récupérez à nouveau les mesures)
      // Appel de la méthode du service pour récupérer les mesures
      this.data = this._service.getdatelist();
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
  openEditForm(data: any, enterAnimationDuration: string, exitAnimationDuration: string) {
    
    const dialogRef = this._dialog.open(DateAjoutComponent,  {
      data, enterAnimationDuration,
        exitAnimationDuration   
    }); 
  }
}
