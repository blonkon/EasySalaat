import { Component } from '@angular/core';

import { Media, MediaObject } from '@ionic-native/media/ngx'; // Importez le plugin Media

@Component({
  selector: 'app-preche',
  templateUrl: './preche.page.html',
  styleUrls: ['./preche.page.scss'],
})
export class PrechePage {
  playIcon = 'pause';
  audioFile !: MediaObject;// Déclarez la variable pour gérer la lecture audio

  constructor(private media: Media) {
  }

  ngOnInit() {
    // Créez un objet audio pour votre fichier audio
    this.audioFile = this.media.create('chemin/vers/votre-fichier-audio.mp3');
  }

  playPause() {
    if (this.playIcon === 'pause') {
      this.playIcon = 'play';
      this.audioFile.pause();
    } else {
      this.playIcon = 'pause';
      this.audioFile.play();
    }
  }
}
