import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-profilesuperadmin',
  templateUrl: './profilesuperadmin.page.html',
  styleUrls: ['./profilesuperadmin.page.scss'],
})
export class ProfilesuperadminPage implements OnInit {
nom_admin: string = 'Alhadji Mohamed Keita';
  constructor(private data : DataService) { }

  deconnexion(){
    this.data.logout();
  }

  ngOnInit() {
  }

}
