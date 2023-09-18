import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-detailadmin',
  templateUrl: './detailadmin.component.html',
  styleUrls: ['./detailadmin.component.scss'],
})
export class DetailadminComponent  implements OnInit {

  nom?:string;
  email?:string;
constructor(private liste : AdminService) { }
ngOnInit() {
  this.nom=this.liste.detailsForUser.nom;
  console.log(this.liste.detailsForUser.nom);
  this.email=this.liste.detailsForUser.email;
}
  // backtolist(){
  //   this.router.navigate(['/admin/accueilsuperadmin']);
  // }

}
