import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-profile-admin-mosque',
  templateUrl: './profile-admin-mosque.page.html',
  styleUrls: ['./profile-admin-mosque.page.scss'],
})
export class ProfileAdminMosquePage implements OnInit {

  constructor(private data : DataService) { }
  deconnexion(){
    this.data.logout();
  }

  ngOnInit() {
  }

}
