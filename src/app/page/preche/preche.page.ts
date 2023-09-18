import { Component } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-preche',
  templateUrl: './preche.page.html',
  styleUrls: ['./preche.page.scss'],
})
export class PrechePage {
  enLecture: any = null;
  playIcon = 'pause';
  preachers = [
    {num : 1 ,name: 'Imam Fadiga', description: 'Le tout puissant', audioUrl: '../../assets/audios/preche1.mp3',isPlaying: false  },
    {num : 2 ,name: 'Imam Blonko', description: 'La croyance', audioUrl: '../../assets/audios/preche3.m4a',isPlaying: false  },
    {num : 3 ,name: 'Imam Mohamed Diarra', description: 'Le tout puissant', audioUrl: '../../assets/audios/preche2.m4a', isPlaying: false  },
    {num : 4 ,name: 'Imam Lacine Keïta', description: 'Le tout puissant', audioUrl: '../../assets/audios/preche4.m4a' ,isPlaying: false },
    {num : 5 ,name: 'Imam Ibrahim Sy', description: 'Le tout puissant', audioUrl: '../../assets/audios/preche1.mp3' ,isPlaying: false },
  ];



  constructor(private router: Router) {
  }
  async initAudio() {
  }

  ngOnInit() {
  }

  playPause(preacher: any) {
   
    if (!preacher.isPlaying) {

      this.router.navigate(['/jouerAudio', {
        audioUrl: preacher.audioUrl,
        nom: preacher.name,
        titre: preacher.description

      }]);
    }

    preacher.isPlaying = !preacher.isPlaying;
  }


  downloadFile() {
    console.log('Téléchargement du fichier en cours...');
   }


}
