import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-mosque-aproximite',
  templateUrl: './mosque-aproximite.page.html',
  styleUrls: ['./mosque-aproximite.page.scss'],
})
export class MosqueAproximitePage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  goBack() {
    this.navCtrl.back(); // Cette ligne permet de revenir à la page précédente
  }
  
}
