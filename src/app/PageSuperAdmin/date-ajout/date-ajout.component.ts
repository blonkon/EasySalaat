import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-ajout',
  templateUrl: './date-ajout.component.html',
  styleUrls: ['./date-ajout.component.scss'],
})
export class DateAjoutComponent  implements OnInit {
dateFransais = new Date();
  constructor() { }

  ngOnInit() {}

}
