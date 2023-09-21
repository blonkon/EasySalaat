import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { SourateService } from 'src/app/service/sourate.service';


@Component({
  selector: 'app-sourate',
  templateUrl: './sourate.page.html',
  styleUrls: ['./sourate.page.scss'],
})
export class SouratePage implements OnInit {
  
  detailSourate:any;
  translate:any[]= [];
  textTranslate:any;

  constructor(private sourateService: SourateService,private router:Router){
      this.detailSourate = this.sourateService.sourateUrl;
  }

  ngOnInit(): void {
    this.sourateService.sourateData$.subscribe(newSourate => {
      this.detailSourate = newSourate;
      console.log(this.detailSourate);
    })
    // this.sourateService.getSurahTrad().subscribe(res => {
    //   this.translate = res.data.surahs.ayahs;
    //   console.log(this. translate);
    // });
   
  }
  closeDialog(){
    this.router.navigate(['/tabs/tab2']);
  }
}
