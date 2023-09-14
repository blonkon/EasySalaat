import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-detail-sourate',
  templateUrl: './detail-sourate.component.html',
  styleUrls: ['./detail-sourate.component.scss'],
})
export class DetailSourateComponent  implements OnInit {

  detail:any;
  p : number=1;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
  
  }

  ngOnInit(): void {
    this.detail = this.data;
    console.log(this.detail);
  }
  closeDialog(){
    console.log("closeDialog")
  }
}
