import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mosque } from 'src/app/model/liste-mosque.model';
import { MosqueService } from 'src/app/service/liste-mosque.service';

@Component({
  selector: 'app-liste-mosque',
  templateUrl: './liste-mosque.page.html',
  styleUrls: ['./liste-mosque.page.scss'],
})
export class ListeMosquePage implements OnInit {
   mosques!: Mosque[];
  constructor(private mosqueService : MosqueService,private router :Router) {}

  ngOnInit() {
   this.getListMosque();
  }
  getListMosque(){
    this.mosques = this.mosqueService.getMosques();
  }

    openDetail(mosque:any){
      this.mosqueService.detail = mosque;
      this.router.navigate(['/tabs/info-page'])
    }

}


