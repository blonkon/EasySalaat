import { Component, OnInit } from '@angular/core';
import { MosqueeService } from '../mosquee.service';

@Component({
  selector: 'app-detail-mosquee',
  templateUrl: './detail-mosquee.component.html',
  styleUrls: ['./detail-mosquee.component.scss'],
})
export class DetailMosqueeComponent  implements OnInit {
  nom?:string;
  iman?:string;
  admin?:string;
  tel?:number;
constructor(private liste : MosqueeService) { }
ngOnInit() {
  this.nom=this.liste.detailsMosque.nom;
  this.admin=this.liste.detailsMosque.admin_mail;
  this.iman=this.liste.detailsMosque.iman;
  this.tel=this.liste.detailsMosque.tel
}

}
