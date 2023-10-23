import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modificationcoran',
  templateUrl: './modificationcoran.component.html',
  styleUrls: ['./modificationcoran.component.scss'],
})
export class ModificationcoranComponent  implements OnInit {

  surah: string[]=[
    'Al-Fatiha',
    'Al-Baqra',
    'Al-Maida',
    'Al-Imourane',
    'Al-Yusuf',
    'Al-Iklass',
    'Al-YUNUS',
    'Al-IBRAHIM',
    'Al-MARIAM',
    'Al-KAFIROUNA',
    'Al-TAWBA',
  ];
  mosqueName: any;
  porte: any;
  rue: any;
  phoneNumber: any;
  submitForm() {
  throw new Error('Method not implemented.');
  }
  onImageChange($event: Event) {
  throw new Error('Method not implemented.');
  }
  imamName: any;
  rechercher($event: Event) {
  throw new Error('Method not implemented.');
  }
  ajouterMosquee() {
  throw new Error('Method not implemented.');
  }

    constructor() { }

    ngOnInit() {}


}
