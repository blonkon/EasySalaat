import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddListeComponent } from '../add-liste/add-liste.component';
import { ListeLectureService } from 'src/app/service/liste-lecture.service';
import { Router } from '@angular/router';
import { CoranService } from '../../PageSuperAdmin/coran.service';

@Component({
  selector: 'app-liste-lecture',
  templateUrl: './liste-lecture.component.html',
  styleUrls: ['./liste-lecture.component.scss'],
})
export class ListeLectureComponent  implements OnInit {
  enLecture: any = null;
  playIcon = 'pause';
  
  lectures = [
    {num : 1 ,name: 'Al-Fatiha',  audioUrl: '../../assets/verset/001001.mp3',isPlaying: false  },
    {num : 2 ,name: 'Al-Baqara', audioUrl: '../../assets/verset/001002.mp3',isPlaying: false  },
    {num : 3 ,name: 'Aal-i-Imraam', audioUrl: '../../assets/verset/001003.mp3', isPlaying: false  },
    {num : 4 ,name: 'An-Nisaa', audioUrl: '../../assets/verset/001004.mp3' ,isPlaying: false },
    {num : 5 ,name: 'Al-Maidaa',  audioUrl: '../../assets/verset/001004.mp3' ,isPlaying: false },
    
  ];



  constructor(private router: Router,private service  : ListeLectureService) {
  }
  async initAudio() {
  }

  ngOnInit() {
  }

  
 

  playPause(lecture: any) {
  
    if (!lecture.isPlaying) {
      this.router.navigate(['/lecture-audio', {
        audioUrl: lecture.audioUrl,
        nom: lecture.name,
        titre: lecture.description
        
      }]);
      
    }
   
    lecture.isPlaying = !lecture.isPlaying;
  }


  downloadFile() {
    console.log('Téléchargement du fichier en cours...');
   }




}
