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
          
          const loading = await this.loadingController.create();
          await loading.present();
      
          const user = await this.data.login(this.email,this.password);
          await loading.dismiss();
      
          if (user) {
            this.invalid="";
            this.router.navigateByUrl('/Admin/accueilsuperadmin', { replaceUrl: true });
          } else {
            this.invalid='Login failed Please try again!';
          }
  }

  ngOnInit() {}

}
