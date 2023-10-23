import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MosqueService } from '../../service/liste-mosque.service';
import { Mosque } from 'src/app/model/liste-mosque.model';
@Component({
  selector: 'app-mosque-aproximite',
  templateUrl: './mosque-aproximite.page.html',
  styleUrls: ['./mosque-aproximite.page.scss'],
})
export class MosqueAproximitePage implements OnInit {
  map!: L.Map;
  distanceToMosque : any;
  mosqueeLocations: Mosque[]=[];
  utilisateurPosition: [number, number] = [0, 0]; // Position de l'utilisateur réelle
  currentRouteControl: L.Routing.Control | null = null;
  // mosqueeLocations: { name: string; location: [number, number] }[] = [
  //   { name: 'Mosque Mille et une merveille', location: [12.63074, -8.0295731] },
  //   { name: 'Mosquée', location: [12.6374469, -8.0264756] },
  // ];

  constructor(private navCtrl: NavController, private mosqueService: MosqueService) {}

  ngOnInit() {
    this.getUserLocation();
    this.mosqueeLocations = this.mosqueService.getMosques();
  }

  ionViewDidEnter() {
    this.map = L.map('mapId').setView(this.utilisateurPosition, 13); // Position initiale de l'utilisateur

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);

    // Marqueurs des mosquées
    this.mosqueeLocations.forEach((location) => {
      const markerMosquee = L.marker(location.geoPoint).addTo(this.map);
      markerMosquee.bindPopup(location.nom);

      // Ajoutez un gestionnaire de clic pour le marqueur de mosquée
      markerMosquee.on('click', () => {
        // Vérifiez s'il existe déjà un itinéraire actuel
        if (this.currentRouteControl) {
          // Si oui, supprimez-le de la carte
          this.map.removeControl(this.currentRouteControl);
        }
        // Créez l'itinéraire uniquement lorsque le marqueur est cliqué
        const routingControl = L.Routing.control({
          waypoints: [
            L.latLng(this.utilisateurPosition[0], this.utilisateurPosition[1]),
            L.latLng(location.geoPoint[0], location.geoPoint[1]),
          ],
        }).addTo(this.map);
        // Mettez à jour la variable de l'itinéraire actuel
        this.currentRouteControl = routingControl;
        // Vous pouvez personnaliser l'itinéraire ici, par exemple, en ajoutant un nom.
        routingControl.setWaypoints([
          L.latLng(this.utilisateurPosition[0], this.utilisateurPosition[1]),
          L.latLng(location.geoPoint[0], location.geoPoint[1]),
        ]);

            // Calcul de la distance entre la position de l'utilisateur et la mosquée
        const distance = this.calculateDistance(
          this.utilisateurPosition[0],
          this.utilisateurPosition[1],
          location.geoPoint[0],
          location.geoPoint[1]
        );
        this.distanceToMosque = distance;
      });
    });
  }
    // Fonction pour calculer la distance en kilomètres
    calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
      const R = 6371; // Rayon de la Terre en km
      const dLat = this.degToRad(lat2 - lat1);
      const dLon = this.degToRad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.degToRad(lat1)) * Math.cos(this.degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c;
      return distance;
    }
    
    degToRad(deg: number): number {
      return deg * (Math.PI / 180);
    }

  getUserLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.utilisateurPosition = [position.coords.latitude, position.coords.longitude];
          this.map.setView(this.utilisateurPosition, 13); // Centrez la carte sur la position de l'utilisateur
          this.addUserMarker(this.utilisateurPosition);
        },
        (error) => {
          console.error('Erreur de géolocalisation :', error);
        }
      );
    } else {
      console.error('La géolocalisation n\'est pas prise en charge par ce navigateur.');
    }
  }

  addUserMarker(position: [number, number]) {
    const markerUtilisateur = L.marker(position).addTo(this.map);
    markerUtilisateur.bindPopup('Votre position');
  }

  goBack() {
    this.navCtrl.back(); // Cette ligne permet de revenir à la page précédente
  }
}
