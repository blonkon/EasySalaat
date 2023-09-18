import { Component, OnInit } from '@angular/core';
import { SourateService } from 'src/app/service/sourate.service';
import { MatDialog } from '@angular/material/dialog'
import { DetailSourateComponent } from '../detail-sourate/detail-sourate.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sourate',
  templateUrl: './sourate.component.html',
  styleUrls: ['./sourate.component.scss'],
})
export class SourateComponent  implements OnInit {

 
  surahData:any[]= [];
  translate:any[]= [];
  // data:any;



  constructor(private http : HttpClient,private route: ActivatedRoute,
    private sourateService: SourateService,private dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.sourateService.getSurahData().subscribe(data => {
      this.surahData = data.data.surahs;
      console.log(this.surahData);
    });
   
  
  }
  openDetail(sourate: any) {
   
    this.sourateService.setSourateUrl(sourate);
   // console.log(sourate);
    this.router.navigate(['/tabs/sourate']);
  }
  // openDetail(sourate: any) {
  //   this.quranService.sourateUrl = sourate;
  //   console.log(sourate);
  //   this.router.navigate(['/tabs/sourate']);

  // }
  
}
