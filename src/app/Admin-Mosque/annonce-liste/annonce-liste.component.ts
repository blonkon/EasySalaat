import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnonceServiceService } from '../annonce-service.service';

@Component({
  selector: 'app-annonce-liste',
  templateUrl: './annonce-liste.component.html',
  styleUrls: ['./annonce-liste.component.scss'],
})
export class AnnonceListeComponent  implements OnInit {
   annonceTab: any[]= [];
  
  constructor(private annonceService: AnnonceServiceService) { 
   this.annonceTab= this.annonceService.getAnnonce();
  }

  ngOnInit() {}

}
