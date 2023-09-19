import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}
  navigateToInscription(){
    this.router.navigateByUrl('/inscription')}

    navigateToAdminmosque(){
      this.router.navigateByUrl('/admosque')}
      navigateToSuperAdmin(){
        this.router.navigateByUrl('/superadmin')}
}
