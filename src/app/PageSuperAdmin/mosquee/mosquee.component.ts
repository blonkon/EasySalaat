import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MosqueeService } from '../mosquee.service';
import { Mosques } from 'src/app/models/Moques';

@Component({
  selector: 'app-mosquee',
  templateUrl: './mosquee.component.html',
  styleUrls: ['./mosquee.component.scss'],
})
export class MosqueeComponent implements OnInit {

  public data: any[]=[];
  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }

  ajouterMosquee() {
    this.router.navigate(['ajoutmosquee']);
  }

public nombre_mosquee!: number;
  constructor( private alertController: AlertController, private router : Router,private _service : MosqueeService) {
   }

   async ngOnInit() {
    this.liste();
}
async liste(){
  this.nombre_mosquee = this.data.length;
  (await this._service.getUtilisateurList()).forEach((element) => {
    this.data.push(element);
  });
  console.log(this.data[0])
  this.nombre_mosquee = this.data[0].length;
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
      this.nombre_mosquee = this.data.length-1;
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

detailuser(mosque : Mosques){
  this._service.detailsMosque=mosque;
  this.router.navigate(['admin/accueilsuperadmin/detailmosquee'])
}

}
