import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss'],
})
export class ConnexionComponent  implements OnInit {
  email : string ="";
  password : string="";
  invalid: string="";

  constructor(private data : DataService, private router : Router, private loadingController: LoadingController,
		private alertController: AlertController,){
    
  }
  async onSubmit(forms : NgForm){
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexPassorwd = /^.{5,}$/;
    const regex = new RegExp(regexEmail);
    const regex2 = new RegExp(regexPassorwd);
    if (regexEmail.test(this.email) ) {

        if (regexPassorwd.test(this.password)) {
          
          const loading = await this.loadingController.create();
          await loading.present();
      
          const user = await this.data.login(this.email,this.password);
          await loading.dismiss();
      
          if (user) {
            this.router.navigateByUrl('/accueilsuperadmin', { replaceUrl: true });
          } else {
            console.log(user)
            this.invalid='Login failed Please try again!';
          }

        }else{
          this.invalid = "Mot de passe doit contenir au moins 5 caracteres";
        }

    }else{
      this.invalid="Email incorrect";
    }
  }

  ngOnInit() {}

}
