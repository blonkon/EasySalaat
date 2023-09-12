import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
  
})
export class Tab1Page {

  priere = [
    {
      id : 1,
      nom : 'Fajr',
      heure : '05:10'
    },
    {
      id : 2,
      nom : 'Chourouq',
      heure : '06:19'
    },
    {
      id : 3,
      nom : 'Dohr',
      heure : '12:31'
    },
    {
      id : 4,
      nom : 'Asr',
      heure : '15:44'
    },
    {
      id : 5,
      nom : 'Maghreb',
      heure : '18:44'
    },
    {
      id : 6,
      nom : 'Icha',
      heure : '19:48'
    },
  ]
  

  constructor() {}

}
