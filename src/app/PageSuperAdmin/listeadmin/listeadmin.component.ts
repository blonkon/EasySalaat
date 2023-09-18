import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdminService } from '../admin.service';
import { Firestore, deleteDoc, doc } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listeadmin',
  templateUrl: './listeadmin.component.html',
  styleUrls: ['./listeadmin.component.scss'],
})
export class ListeadminComponent  implements OnInit {

  public data: any[]=[];
  detailsForUser:{
    nom:string,
    email:string
  }={
    nom:"",
    email:""
  }
  
  public nombre_admin!: number;
    constructor( private firestore :Firestore,private alertController: AlertController, private _service : AdminService,private router :Router) {
     }
  
    ngOnInit() {
      this.liste()
    }
    async liste(){
      this.nombre_admin = this.data.length;
      (await this._service.getAdminList()).forEach((element) => {
        this.data.push(element);
      });
      console.log(this.data[0])
        this.nombre_admin = this.data[0].length;
    }
    detail(id : string,nom : string){
      this._service.userdetails=id;
      this._service.usernom=nom;
      this.router.navigate(['admin/accueilsuperadmin/modifieradmin'])
    }
  
  public alertButtons = [
    {
      text: 'Annuler',
      role: 'cancel',
      handler: () => {
        
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: async (id: string) => {
        // this.data.splice(id, 1);
        this.nombre_admin--;
        await deleteDoc(doc(this.firestore, "Users", id));
        // await deleteDoc(doc(this.firestore,"Mosques",id));
        console.log('Alert confirmed this is '+id);
      },
    },
  ];
  async presentAlert(id : string) {
    const alert = await this.alertController.create({
      header: 'Voulez vous supprimer ?',
      buttons:  [
        {
          text: 'Non',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'Oui',
          role: 'confirm',
          handler: () => {
            this.alertButtons[1].handler(id)
            // this.data.splice(id, 1);
            // this.nombre_utilisateur = this.data.length-1;
            // console.log('Alert confirmed');
          },
        },
      ]
    });
  
    await alert.present();
  }
  
  setResult(ev:any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
  }
  
  detailuser(nom : string,email:string){
    this._service.detailsForUser.nom=nom;
    this._service.detailsForUser.email=email;
    this.router.navigate(['/admin/accueilsuperadmin/detailadmin'])
  }
}
