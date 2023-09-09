import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as L from 'leaflet';


@Component({
  selector: 'app-mosque-aproximite',
  templateUrl: './mosque-aproximite.page.html',
  styleUrls: ['./mosque-aproximite.page.scss'],
})
export class MosqueAproximitePage {
  map!: L.Map;
  constructor(private navCtrl: NavController) {}
  
  ionViewDidEnter () {
    this.map = L.map('mapId').setView([12.6270462,-8.0415089],13); // Coordonnées et niveau de zoom initiaux

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    }).addTo(this.map);
    const markerPoint = L.marker([12.6270462,-8.0415089]);
    this.map.addLayer(markerPoint);
    markerPoint.bindPopup('Mosquée Al Muntada');
  }


  goBack() {
    this.navCtrl.back(); // Cette ligne permet de revenir à la page précédente
  }
  
}
