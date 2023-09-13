import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform } from '@ionic/angular';




@Component({
  selector: 'app-preche',
  templateUrl: './preche.page.html',
  styleUrls: ['./preche.page.scss'],
})
export class PrechePage {
  playIcon = 'pause';
  audioFile!: MediaObject;
  preachers = [
    {name: 'Imam Fadiga', description: 'Le tout puissant', audioUrl: '../../assets/audios/preche1.mp3',isPlaying: false  },
    {name: 'Imam Blonko', description: 'La croyance', audioUrl: '../../assets/audios/preche1.mp3',isPlaying: false  },
    {name: 'Imam Mohamed Diarra', description: 'Le tout puissant', audioUrl: '../../assets/audios/preche1.mp3', isPlaying: false  },
    {name: 'Imam Lacine Keïta', description: 'Le tout puissant', audioUrl: '../../assets/audios/preche1.mp3' ,isPlaying: false },
    {name: 'Imam Ibrahim Sy', description: 'Le tout puissant', audioUrl: '../../assets/audios/preche1.mp3' ,isPlaying: false },
    // Ajoutez d'autres prêcheurs ici
  ];
  currentNumber = 1;


  constructor(public media: Media,public platform:Platform) {

    this.platform.ready().then(() => {
      if (Capacitor.isNativePlatform()) {
        // L'application s'exécute sur une plateforme native, initialisez le plugin Media
        this.initAudio();
      } else {
        // L'application s'exécute sur une plateforme Web, vous pouvez gérer cela en conséquence
        // Par exemple, affichez un message d'erreur ou masquez les fonctionnalités audio non prises en charge
        console.log('L\'application s\'exécute sur une plateforme Web. Les fonctionnalités audio ne sont pas prises en charge.');
      }
    });
  }
  async initAudio() {
    // Utilisez Media.create pour créer l'objet multimédia
    const audioFilePath = this.preachers[0].audioUrl;
    this.audioFile = this.media.create(audioFilePath);
  }

  ngOnInit() {
    // Créez un objet audio pour votre fichier audio
    // this.audioFile = this.media.create('../../assets/audio/preche1.mp3');
  }

  readAudio() {
    this.audioFile = this.media.create('../../assets/audios/preche1.mp3');
    // to listen to plugin events:
    this.audioFile.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
    this.audioFile.onSuccess.subscribe(() => console.log('Action is successful'));
    this.audioFile.onError.subscribe(error => console.log('Error!', error));
    // play the file
    this.audioFile.play();
  }

  // playPause(audioUrl: string) {
  //   // Créez un objet audio pour le fichier audio correspondant au prêcheur en cours
  //   if (!this.audioFile) {
  //     this.audioFile = this.media.create(audioUrl);
  //   }

  //   if (this.playIcon === 'pause') {
  //     this.playIcon = 'play';
  //     this.audioFile.pause();
  //   } else {
  //     this.playIcon = 'pause';
  //     this.audioFile.play();
  //   }
  // }

  playPause(preacher: any) {
    // Recherchez le prêcheur en cours de lecture
    const currentlyPlayingPreacher = this.preachers.find(p => p.isPlaying);

    // Si un prêcheur est actuellement en lecture et n'est pas le même que celui sur lequel vous avez appuyé, mettez-le en pause
    if (currentlyPlayingPreacher && currentlyPlayingPreacher !== preacher) {
      currentlyPlayingPreacher.isPlaying = false;
      this.audioFile.pause();
    }

    // Changez l'état de lecture du prêcheur sur lequel vous avez appuyé
    preacher.isPlaying = !preacher.isPlaying;

    if (!this.audioFile) {
      this.audioFile = this.media.create(preacher.audioUrl);
    }

    if (preacher.isPlaying) {
      this.playIcon = 'pause';
      this.audioFile.play();
    } else {
      this.playIcon = 'play';
      this.audioFile.pause();
    }
  }
  downloadFile() {
    console.log('Téléchargement du fichier en cours...');
   }


}
