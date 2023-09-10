import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddListeComponent } from '../add-liste/add-liste.component';

@Component({
  selector: 'app-liste-lecture',
  templateUrl: './liste-lecture.component.html',
  styleUrls: ['./liste-lecture.component.scss'],
})
export class ListeLectureComponent  implements OnInit {

  constructor(private dialog : MatDialog) { }

  ngOnInit() {}

  openDialog(){
    const dialogRef = this.dialog.open(AddListeComponent, {
      width: '500px',
      height: '500px',
    });
  }

}
