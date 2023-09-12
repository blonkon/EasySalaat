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

  constructor(private sourateService: SourateService,private router:Router){
    console.log(this.sourateService.sourateUrl);
  }

  ngOnInit(): void {
    this.detailSourate = this.sourateService.sourateUrl
    console.log(this.detailSourate);
  }
  closeDialog(){
    this.router.navigate(['/tabs/tab2']);
  }
}
