import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modifier-profile',
  templateUrl: './modifier-profile.component.html',
  styleUrls: ['./modifier-profile.component.scss'],
})
export class ModifierProfileComponent  implements OnInit {
getnom: string = 'Alhadji Mohamed Keita';
  constructor() { }

  ngOnInit() {}

}
