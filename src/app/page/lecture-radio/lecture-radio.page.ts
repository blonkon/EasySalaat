import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lecture-radio',
  templateUrl: './lecture-radio.page.html',
  styleUrls: ['./lecture-radio.page.scss'],
})
export class LectureRadioPage implements OnInit {

  radioLinks: any;
  isPlaying = false;
  radioPlayer: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit() {
    this.radioLinks = this.data;
  }

  pauseRadio() {
    if(this.radioLinks){
      this.radioPlayer.pause() ;
      this.isPlaying = false;
    }
  }
  playRadio(){
    if(this.radioLinks){
     if(this.isPlaying){
      this.pauseRadio();
     } else{
      const audioUrl = this.radioLinks.lien;
      this.isPlaying = true;
      this.radioPlayer = new Audio(audioUrl);
      this.radioPlayer.load()
      this.radioPlayer.play();
     }
    }
  }
}