import { Component } from '@angular/core';

import { Media, MediaObject } from '@ionic-native/media/ngx'; // Importez le plugin Media

@Component({
  selector: 'app-preche',
  templateUrl: './preche.page.html',
  styleUrls: ['./preche.page.scss'],
})
export class PrechePage {
  playIcon = 'pause';
  audioFile!: MediaObject;// Déclarez la variable pour gérer la lecture audio
  preachers = [
    { name: 'Imam Fadiga', description: 'Le tout puissant', audioUrl: '../../assets/audio/preche1.mp3' },
    { name: 'Imam Blonko', description: 'La croyance', audioUrl: '../../assets/audio/preche1.mp3' },
    { name: 'Imam Mohamed Diarra', description: 'Le tout puissant', audioUrl: '../../assets/audio/preche1.mp3' },
    { name: 'Imam Lacine Keïta', description: 'Le tout puissant', audioUrl: '../../assets/audio/preche1.mp3' },
    { name: 'Imam Ibrahim Sy', description: 'Le tout puissant', audioUrl: '../../assets/audio/preche1.mp3' },
    // Ajoutez d'autres prêcheurs ici
  ];


  constructor(private media: Media) {
  }

  ngOnInit() {
    // Créez un objet audio pour votre fichier audio
    // this.audioFile = this.media.create('../../assets/audio/preche1.mp3');
  }

  playPause(audioUrl: string) {
    // Créez un objet audio pour le fichier audio correspondant au prêcheur en cours
    if (!this.audioFile) {
      this.audioFile = this.media.create(audioUrl);
    }

    if (this.playIcon === 'pause') {
      this.playIcon = 'play';
      this.audioFile.pause();
    } else {
      this.playIcon = 'pause';
      this.audioFile.play();
    }
  }


}

//===========================nouvelle methode============================
