import { Component, OnInit } from '@angular/core';
import { ListeLectureService } from 'src/app/service/liste-lecture.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-lecture',
  templateUrl: './liste-lecture.component.html',
  styleUrls: ['./liste-lecture.component.scss'],
})
export class ListeLectureComponent implements OnInit {
 
  surah: any[] = [];
  surahAudio: any[] = [];
  selectedSurah: any = null;
  select : any[]=[];
  isPlaying = false;
 indexVerse: number = 0;


  constructor(private lectService: ListeLectureService,private router: Router) {}

  async initAudio() {
    }

  ngOnInit() {
    this.lectService.getCoran().subscribe((coran: any) => {
      this.surah = coran.surahs;
      console.log(this.surah);
    });
  }

  playerAudioUrl(surah: any) {
   
    this.selectedSurah = this.surah.find((s: any) => s.number == surah.number);

    if (this.selectedSurah) {
      console.log(this.selectedSurah)
     this.selectedSurah.ayahs.forEach((res : any) => {
      this.surahAudio.push(res.audioSecondary[0]);
     })
    }
    console.log(this.surahAudio)
    
  }

  playAudio() {
    if (this.surahAudio.length > 0) {
      this.isPlaying = true; // Marquez la lecture en cours
  
      const playNextVerse = () => {
        if (this.indexVerse < this.surahAudio.length) {
          const audioUrl = this.surahAudio[this.indexVerse];
          const audioPlayer = new Audio(audioUrl);
          audioPlayer.load();
  
          audioPlayer.addEventListener('ended', () => {
            // Lorsque la lecture du verset actuel est terminée, passez au suivant
            this.indexVerse++;
            playNextVerse(); // Jouez le verset suivant
          });
  
          audioPlayer.play();
        } else {
          // Tous les versets ont été lus, marquez la lecture comme terminée
          this.isPlaying = false;
        }
      };
  
      // Commencez la lecture en appelant la fonction playNextVerse pour le premier verset
      playNextVerse();
    } else {
      console.log("Impossible de lire l'audio");
    }
  }
  
  
  }
  