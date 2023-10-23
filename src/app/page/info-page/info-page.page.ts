import { Component, OnInit } from '@angular/core';
import { MosqueService } from 'src/app/service/liste-mosque.service';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.page.html',
  styleUrls: ['./info-page.page.scss'],
})
export class InfoPagePage implements OnInit {

  constructor(private mosqueSer : MosqueService) { }

 detailMosque:any;
 
  ngOnInit() {
    this.detailMosque= this.mosqueSer.detail;
    console.log(this.detailMosque)
  }

}
