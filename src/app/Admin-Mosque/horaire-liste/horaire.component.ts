import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrls: ['./horaire.component.scss'],
})
export class HoraireComponent  implements OnInit {

  public alertButtons = ['OK'];
  public alertInputs = [
    
    {
      type: 'time',
      placeholder: '',
    }
  ];

  constructor() {}  

  ngOnInit() {}

}
