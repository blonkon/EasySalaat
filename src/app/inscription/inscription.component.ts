import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}
  navigate(){
    this.router.navigate(['../login'])}

}
