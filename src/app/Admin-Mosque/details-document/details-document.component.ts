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
  audios= [
    {nom:'Lecture Imam', audioUrl:'../../../assets/audios/preche1.mp3', isPlaying: false}
  ]
  
  constructor(private alertController: AlertController, private _service : DetailsServiceService) { }

  async initAudio(){}

  ngOnInit() {
   
  }
  playPause(audioss: any){
    // if(!audios.isPlaying){
    //   //jouer l'audio du precheur selectionné
    //   audios.audio = new Audio(audios.audioUrl);
    //   audios.audio.play();
    // }

    if (!audioss.audio) {
      // Créez un nouvel objet Audio s'il n'existe pas
      audioss.audio = new Audio(audioss.audioUrl);
    }
  
    if (audioss.audio.paused) {
      // L'audio est en pause, jouez-le
      audioss.audio.play();
    } else {
      // L'audio est en cours de lecture, mettez-le en pause
      audioss.audio.pause();
    }
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
