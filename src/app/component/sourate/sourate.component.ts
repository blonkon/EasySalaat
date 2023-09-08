import { Component, OnInit } from '@angular/core';
import { SourateService } from 'src/app/service/sourate.service';

@Component({
  selector: 'app-sourate',
  templateUrl: './sourate.component.html',
  styleUrls: ['./sourate.component.scss'],
})
export class SourateComponent  implements OnInit {
  surahData:any[]= [];
 
  constructor(private quranService: SourateService) { }

  ngOnInit(): void {
    this.quranService.getSurahData().subscribe(data => {
      this.surahData = data.data;
      console.log(this.surahData);
    });
  }
}
