import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddListeComponent } from '../add-liste/add-liste.component';
import { ListeLectureService } from 'src/app/service/liste-lecture.service';

@Component({
  selector: 'app-liste-lecture',
  templateUrl: './liste-lecture.component.html',
  styleUrls: ['./liste-lecture.component.scss'],
})
export class ListeLectureComponent  implements OnInit {

  surahData:any[]= [];
  qiblaDirection: number=1;
  constructor(private dialog : MatDialog, private listeService:ListeLectureService) { }

  ngOnInit() {

    this.listeService.getQiblaDirection(25.4106386,-54.189238 ).subscribe(response => {
      this.qiblaDirection = response.data.direction;
    })

  }

  openDialog(){
    const dialogRef = this.dialog.open(AddListeComponent, {
      width: '500px',
      height: '500px',
    });
  }

}
