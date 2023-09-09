import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Users } from '../models/users';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {


  @Input() name?: string;
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
            this.router.navigateByUrl('/profile', { replaceUrl: true });
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
}
