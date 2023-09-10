import { Component, OnInit } from '@angular/core';
import { SourateService } from 'src/app/service/sourate.service';
import { Tab2PageModule } from 'src/app/tab2/tab2.module';
import { MatDialog } from '@angular/material/dialog'
import { DetailSourateComponent } from '../detail-sourate/detail-sourate.component';


@Component({
  selector: 'app-sourate',
  templateUrl: './sourate.component.html',
  styleUrls: ['./sourate.component.scss'],
})
export class SourateComponent  implements OnInit {

  surahData:any[]= [];
  data:any;
  

  constructor(private quranService: SourateService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.quranService.getSurahData().subscribe(data => {
      this.surahData = data.data.surahs;
      console.log(this.surahData);
    });
  }

  openDetail(sourate: any) {
    const dialogRef = this.dialog.open(DetailSourateComponent, {
      data: sourate 
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('Fermeture du dialogue');
    });
  }

}
