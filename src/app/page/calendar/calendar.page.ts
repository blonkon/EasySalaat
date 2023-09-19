import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  jours = [
    {
      id : 1,
      nom:'Mawlid al-Nabi',
      date :'26 Sept 23',
      desc:'12 Rabīʿ al-awwal'
    },
    {
      id : 2,
      nom:'Lailat-ul-Miraj',
      date :'17 Feb 24',
      desc:'27 Rajab'
    },
    {
      id : 3,
    nom:'Lailat-ul-Bara\'at',
      date :'07 Mars 24',
      desc:'15 Shaʿbān'
    }
    ,
    {
      id : 4,
    nom:'1st Day of Ramadan',
      date :'22 Mars 24',
      desc:'1 Ramaḍān'
    }
    ,
    {
      id : 5,
    nom:'Lailat-ul-Qadr',
      date :'17 Avril 24',
      desc:'27 Ramaḍān'
    }
    ,
    {
      id : 6,
    nom:'Eid-ul-Fitr',
      date :'21 Avril 24',
      desc:'1 Shawwāl'
    }
  ]
  ngOnInit() {
  }
  selectedMode = 'date';
  showPicker = false;



}
