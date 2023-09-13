import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';
import { Users } from '../models/users';
import { Roles } from '../models/Roles.enum';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent  implements OnInit {

  nom :string="";
  email:string="";
  mdp:string="";
  rmdp:string="";
  invalid : string="";

  constructor(private router : Router,private data : DataService) { }

  ngOnInit() {}
  async onSubmit(form : NgForm){
     const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
     const regexNom = /^.{2,}$/;
     const regexPassorwd = /^.{6,}$/;
    //  const regexNumber =  /(^[4-9][0-9]{7}$)|(^2.{7}$)/;
     const regex = new RegExp(regexEmail);
     const regex1 = new RegExp(regexNom);
     const regex2 = new RegExp(regexPassorwd);
     if (regex.test(this.email)) {
      if (regex1.test(this.nom)) {
        if (regex2.test(this.mdp)) {
          if (this.mdp===this.rmdp) {
            let user: Users ={
              nom : this.nom,
              email : this.email,
              motdepasse : this.mdp,
              role : Roles.USER
            }
           await  this.data.addUser(user)
            // console.log(this.data.test)
            if (this.data.test) {
             this.invalid="";
             this.data.user=user;
             this.data.login(this.email,this.mdp)
            this.router.navigate(['/tabs/tab1']);
            }else{
              this.invalid="Email is present";
            }
          } else {
            this.invalid="Mot de passe non correspondant"
          }
        } else {
          this.invalid="le Mot de passe doit avoir au moins 6 carateres"
        }
        
      } else {
        this.invalid="le Nom doit avoir au moins 2 caracteres"
      }
     }else{
          this.invalid="Email invalid"
     }
    }
}
