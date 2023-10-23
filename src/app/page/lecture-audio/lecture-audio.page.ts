import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router} from '@angular/router';

@Component({
  selector: 'app-lecture-audio',
  templateUrl: './lecture-audio.page.html',
  styleUrls: ['./lecture-audio.page.scss'],
})
export class LectureAudioPage implements OnInit {

  dataDetail: any; 
  surahAudio: any[] = [];
  audioPlayer: any;
  isPlaying = false;
  indexVerse: number = 0;
  audioProgress = 0;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private router : Router) { }

  ngOnInit() {
    this.dataDetail = this.data;

    if (this.dataDetail) {
      try {
        this.dataDetail.ayahs.forEach((res: any) => {
          this.surahAudio.push(res.audioSecondary[0]);
        });
      } catch (error) {
        console.log("Audio non trouvé")
      }
    }
  }

  pauseAudio() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.isPlaying = false;
    }
  }

  playAudio() {
    if (this.surahAudio.length > 0) {
      if (this.isPlaying) {
        this.pauseAudio();
      } else {
        this.isPlaying = true;
        this.playNextVerse();
      }
    }
  }

  avancer() {
    if (this.indexVerse < this.surahAudio.length - 1) {
      this.indexVerse++;
      this.playNextVerse();
    }
  }

  reculer() {
    if (this.indexVerse > 0) {
      this.indexVerse--;
      this.playNextVerse();
    }
  }

  playNextVerse() {
    if (this.indexVerse < this.surahAudio.length) {
      const audioUrl = this.surahAudio[this.indexVerse];
      this.audioPlayer = new Audio(audioUrl);
      this.audioPlayer.load();

      this.audioPlayer.addEventListener('ended', () => {
        this.indexVerse++;
        this.playNextVerse();
      });

      this.audioPlayer.play();

      // Mettez à jour la progression audio pendant la lecture
      this.audioPlayer.addEventListener('timeupdate', () => {
        this.updateAudioProgress();
      });
    } else {
      this.audioPlayer.pause();
      this.isPlaying = false;
    }
  }

  updateAudioProgress() {
    if (this.audioPlayer && this.audioPlayer.duration > 0) {
      this.audioProgress = (this.audioPlayer.currentTime / this.audioPlayer.duration) * 100;
    }
  }

  closeDialog(){
    this.router.navigate(['/tabs/tab2']);
  }
}