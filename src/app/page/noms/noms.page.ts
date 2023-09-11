import { Component, OnInit } from '@angular/core';
import { NomsService } from 'src/app/service/noms.service';

@Component({
  selector: 'app-noms',
  templateUrl: './noms.page.html',
  styleUrls: ['./noms.page.scss'],
})
export class NomsPage implements OnInit {


  noms :any[]= [];

  constructor(private nomService: NomsService) { }

  ngOnInit() {
   this.nomService.getNoms().subscribe(nom =>{
    this.noms = nom.data;
    console.log(this.noms);
   });
  }

  


}
