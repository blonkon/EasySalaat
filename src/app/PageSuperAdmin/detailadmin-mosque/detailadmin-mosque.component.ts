import { Component, OnInit } from '@angular/core';
import { AdminMosqueService } from '../admin-mosque.service';

@Component({
  selector: 'app-detailadmin-mosque',
  templateUrl: './detailadmin-mosque.component.html',
  styleUrls: ['./detailadmin-mosque.component.scss'],
})
export class DetailadminMosqueComponent  implements OnInit {
  nom?:string;
  email?:string;
constructor(private liste : AdminMosqueService) { }
ngOnInit() {
  this.nom=this.liste.detailsForUser.nom;
  console.log(this.liste.detailsForUser.nom);
  this.email=this.liste.detailsForUser.email;
}

}
