import { Component, OnInit } from '@angular/core';
import { ListeLectureService } from 'src/app/service/liste-lecture.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LectureAudioPage } from 'src/app/page/lecture-audio/lecture-audio.page';

@Component({
  selector: 'app-liste-lecture',
  templateUrl: './liste-lecture.component.html',
  styleUrls: ['./liste-lecture.component.scss'],
})
export class ListeLectureComponent implements OnInit {
 
  surah: any[] = [];
 


  constructor(private lectService: ListeLectureService,private dialog : MatDialog) {}

  async initAudio() {
    }

  ngOnInit() {
    this.lectService.getCoran().subscribe((coran: any) => {
      this.surah = coran.surahs;
      console.log(this.surah);
    });
  }
    openAudio(objet: any){
      const ref = this.dialog.open(LectureAudioPage,{
        width:'500px',height:'55%',
        data: objet
      })
      ref.afterClosed().subscribe(result => {
        console.log('La boîte de dialogue a été fermée', result);
      });
    }
  
 }
  