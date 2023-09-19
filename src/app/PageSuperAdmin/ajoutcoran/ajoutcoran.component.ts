import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajoutcoran',
  templateUrl: './ajoutcoran.component.html',
  styleUrls: ['./ajoutcoran.component.scss'],
})
export class AjoutcoranComponent  implements OnInit {

  
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
  nom_complet_imame: any;
  nationalite: any;
  audio: any;
  imamName: any;
  rechercher($event: Event) {
  throw new Error('Method not implemented.');
  }
  ajouterMosquee() {
  throw new Error('Method not implemented.');
  }

    constructor(private router: Router) { }

    ngOnInit() {}
    // tolecteur(){
    //   this.router.navigateByUrl('../../lecteur')
    // }
  }
