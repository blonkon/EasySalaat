import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListeLectureService } from 'src/app/service/liste-lecture.service';

@Component({
  selector: 'app-lecture-audio',
  templateUrl: './lecture-audio.page.html',
  styleUrls: ['./lecture-audio.page.scss'],
})
export class LectureAudioPage implements OnInit {

  audioUrl: any;
  nom: any;
  titre: any;
  audio!: HTMLAudioElement;
  isPlaying = false;

  //temps
  duration: number = 0;
  currentTime: number = 0;
  timer: any;
  progressPercentage = 0;
  //

  constructor(private route: ActivatedRoute, private lecture : ListeLectureService) {}

  ngOnInit() {
    this.audioUrl = this.lecture.surahselect
    console.log("donnée ",this.audioUrl)
    // this.route.paramMap.subscribe((params) => {
    //   const paramAudioUrl = params.get('audioUrl');
    //   this.nom = params.get('nom') || '';
    //   this.titre = params.get('titre') || '';

    //   console.log('Nom:', this.nom);
    //   console.log('Titre:', this.titre);

    //   if (paramAudioUrl !== null) {
    //     this.audioUrl = paramAudioUrl;
    //     this.initializeAudio(this.audioUrl);
    //   }
    // });
  }


  initializeAudio(audioUrl: string) {
    if (this.audio) {
      this.audio.pause(); // Pause the current audio if it exists
      clearInterval(this.timer);
    }
    this.audio = new Audio(audioUrl);
    this.audio.play(); // jouer audio
    this.isPlaying = true;

    // Obtenir la durée totale de l'audio
    this.audio.addEventListener('loadedmetadata', () => {
      this.duration = this.audio.duration;
      this.startTimer();
    });
  }
  startTimer() {
    this.timer = setInterval(() => {
      this.currentTime = this.audio.currentTime;

      // Mettez à jour la propriété progressPercentage en pourcentage
      if (this.duration !== 0) {
        this.progressPercentage = (this.currentTime / this.duration) * 100;
      }
    }, 1000); // Mettre à jour chaque seconde
  }
  calculateRemainingTime() {
    if (this.duration === 0 || this.currentTime === 0) {
      return '0s';
    }

    const remainingTime = this.duration - this.currentTime;
    const minutes = Math.floor(remainingTime / 60);
    const seconds = Math.floor(remainingTime % 60);
    return `${minutes}m ${seconds}s`;
  }
  ngOnDestroy() {
    if (this.audio) {
      this.audio.pause();
      clearInterval(this.timer);
    }
  }

  playPause() {
    if (this.audio) {
      if (this.audio.paused) {
        this.audio.play(); // Play audio if paused
        this.isPlaying = true;
      } else {
        this.audio.pause(); // Pause audio if playing
        this.isPlaying = false;
      }
    }
  }

  avance() {
    if (this.audio) {
      this.audio.currentTime += 15; // Filer vers l'avant
    }
  }
  recule() {
    if (this.audio) {
      this.audio.currentTime -= 15; // Filer vers l'arriere
    }
  }

  barrFile(event: MouseEvent) {
    if (this.audio) {
      const progressBar = event.currentTarget as HTMLElement;
      const rect = progressBar.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const progressBarWidth = rect.width;

      // Calcul de la nouvelle position en pourcentage en fonction du clic
      const newProgressPercentage = (offsetX / progressBarWidth) * 100;

      // Calcul de la nouvelle position en secondes en fonction du pourcentage
      const newPositionInSeconds = (newProgressPercentage / 100) * this.duration;

      // Mettre à jour la position de lecture de l'audio
      this.audio.currentTime = newPositionInSeconds;
    }
  }

}
