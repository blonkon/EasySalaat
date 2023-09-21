import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

<<<<<<< HEAD
  constructor(private navCtrl: NavController ) {}
 
=======
  qiblaDirection?:number;

  constructor(private navCtrl: NavController,private http: HttpClient ) {
    this.getQiblaDirection(12.6392,7.9266)
  }

  private apiUrl = 'http://api.aladhan.com/v1/qibla';



  getQiblaDirection(latitude: number, longitude: number) {
    const url = `${this.apiUrl}/${latitude}/${longitude}`;
     this.http.get<any>(url).subscribe(
      (response) => {
        this.qiblaDirection=response.data.direction;
        console.log(response.data.direction)
      }
    )
  }
  Retour() {
    this.navCtrl.back();
  }
>>>>>>> 1a249f330e37ba9c5d54d0c974d76e14f061d3bf





}
