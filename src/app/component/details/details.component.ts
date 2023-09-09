import { Component, OnInit } from '@angular/core';
import { SourateService } from 'src/app/service/sourate.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent  implements OnInit {

  id:any;
  item : any;
  constructor(private serviceSourate : SourateService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
      if (this.id) {
        this.getSourateById(this.id);
      }
    });
  }
  // ngOnInit() {
  //   this.route.paramMap.subscribe(params => {
  //     const id = +params.get('id'); // Convertir en nombre
  //     if (id) {
  //       this.getSourateById(id);
  //     }
  //   });
  
  
  getSourateById(id: number) {
    this.serviceSourate.getSurahById(id).subscribe(surah => {
      this.item = surah;
      console.log(this.item);
    });
  }
 
  
  
  
  
//   getSourateById(id:number){
//   this.serviceSourate.getSurahById(id).subscribe(surah =>{
//     this.item = surah;
//     console.log(this.item);
//   });
// }
// getSourateById(id:number){
//   this.serviceSourate.getSurahById(id).subscribe(surah =>{
//     this.item = surah.data
//     console.log(this.item);
//   });
// }
}
