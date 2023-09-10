import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-detail-sourate',
  templateUrl: './detail-sourate.component.html',
  styleUrls: ['./detail-sourate.component.scss'],
})
export class DetailSourateComponent  implements OnInit {

  detailSourate:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
  
  }

  ngOnInit(): void {
    this.detailSourate = this.data;
    console.log(this.detailSourate);
  }
  closeDialog(){
    console.log("closeDialog")
  }
}
