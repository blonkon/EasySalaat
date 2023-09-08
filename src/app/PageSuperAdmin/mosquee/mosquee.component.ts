import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mosquee',
  templateUrl: './mosquee.component.html',
  styleUrls: ['./mosquee.component.scss'],
})
export class MosqueeComponent implements OnInit {

  constructor(private router: Router) {}

  rechercher($event: Event) {
    // Ajoutez la logique pour la recherche ici
  }

  ajouterMosquee() {
    this.router.navigate(['ajout-mosquee']);
  }

  goToDetail(arg0: any) {
    // Ajoutez la logique pour la navigation vers le détail ici
  }

  ngOnInit() {}
}
