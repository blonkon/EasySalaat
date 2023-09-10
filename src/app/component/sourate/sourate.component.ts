import { Component, OnInit } from '@angular/core';
import { SourateService } from 'src/app/service/sourate.service';

@Component({
  selector: 'app-sourate',
  templateUrl: './sourate.component.html',
  styleUrls: ['./sourate.component.scss'],
})
export class SourateComponent  implements OnInit {

  surahData:any[]= [];
  data:any;
  

  constructor(private quranService: SourateService) { }

  ngOnInit(): void {
    this.quranService.getSurahData().subscribe(data => {
      this.surahData = data.data.surahs;
      console.log(this.surahData);
    });
  }

  // openDetail(sourate: any) {
  //   const dialogRef = this.dialog.open(DetailsComponent, {
  //     width: '500px',
  //     height: '500px',
  //     data: sourate 
  //   });
  
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('Fermeture du dialogue');
  //   });
  // }

}
