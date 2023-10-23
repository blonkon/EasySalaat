import { Component, OnInit } from '@angular/core';
import {  Storage, ref, uploadBytes } from '@angular/fire/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-ajoutcoran',
  templateUrl: './ajoutcoran.component.html',
  styleUrls: ['./ajoutcoran.component.scss'],
})
export class AjoutcoranComponent  implements OnInit {
  
  
  surah: string[]=[
    // 'Al-Fatiha',
    // 'Al-Baqra',
    // 'Al-Maida',
    // 'Al-Imourane',
    // 'Al-Yusuf',
    // 'Al-Iklass',
    // 'Al-YUNUS',
    // 'Al-IBRAHIM',
    // 'Al-MARIAM',
    // 'Al-KAFIROUNA',
    // 'Al-TAWBA',
  ];
  nom_complet_imame: any;
  nationalite: any;
  audio: any;
  imamName: any;
  nomaudio:string="";
  fichier?:File ;
  constructor() { 
  }
  rechercher($event: Event) {
  throw new Error('Method not implemented.');
  }
  ajouterMosquee() {
  throw new Error('Method not implemented.');
  }

  onchange(event: any) {
    const fichierSelectionne: File = event.target.files[0];
    this.fichier=event.target.files[0];
    this.nomaudio=fichierSelectionne.name;
    console.log('Fichier sélectionné :', fichierSelectionne.name);
    // Faites quelque chose avec le fichier sélectionné, comme l'envoyer vers un serveur, le traiter, etc.
    return fichierSelectionne;
  }


    ngOnInit() {}
    // tolecteur(){
    //   this.router.navigateByUrl('../../lecteur')
    // }
    onSubmit(){
      // const selectedFile = this.fichier;
      // if (selectedFile) {
      //   const cheminStockage = 'lecteurs/' + selectedFile.name;
      //   const storageRef = ref(this.storage, cheminStockage);
      //   uploadBytes(storageRef, selectedFile).then((snapshot) => {
      //     console.log('Uploaded a blob or file!');
      //   });
      // }
    }
  }
