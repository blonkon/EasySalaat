import { Component, OnInit } from '@angular/core';
import { Roles } from '../models/Roles.enum';
import { Users } from '../models/users';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  }
