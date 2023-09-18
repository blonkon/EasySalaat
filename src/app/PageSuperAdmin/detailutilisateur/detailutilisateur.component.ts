import { Component, Injectable, OnInit } from '@angular/core';
import { ListutilisateurComponent } from '../listutilisateur/listutilisateur.component';
import { UtilisateurService } from '../utilisateur.service';

@Component({
  selector: 'app-detailutilisateur',
  templateUrl: './detailutilisateur.component.html',
  styleUrls: ['./detailutilisateur.component.scss'],
})
export class DetailutilisateurComponent  implements OnInit {
    nom?:string;
    email?:string;
  constructor(private liste : UtilisateurService) { }
  ngOnInit() {
    this.nom=this.liste.detailsForUser.nom;
    console.log(this.liste.detailsForUser.nom);
    this.email=this.liste.detailsForUser.email;
  }

}
