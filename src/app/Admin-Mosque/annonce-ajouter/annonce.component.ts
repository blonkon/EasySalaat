import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceServiceService } from '../annonce-service.service';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.scss'],
})
export class AnnonceComponent  implements OnInit {

 
  annonce : any={}
  isEditMode: boolean = false;
  id: number | undefined;
  

 
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private annonceService : AnnonceServiceService
  ) {
    this.route.queryParams.subscribe((params) => {
      if(params['id']){
        this.id = Number(params['id']);
        this.annonce= Object.assign({}, this.annonceService.getAnnonce()[this.id]);
        this.isEditMode = true;
      }
    });
   }

   saveAnnonce(){
      if(this.isEditMode && this.id !== undefined){
        this.annonceService.editAnnonce(this.id, this.annonce);
      } else {
        this.annonceService.addAnnonce(this.annonce);
      }
      this.router.navigate(['/annonce']);
   }

  ngOnInit() {}

}
