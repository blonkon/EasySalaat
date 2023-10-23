import { Component, OnInit } from '@angular/core';
import { Firestore, addDoc, collection, doc, setDoc } from '@angular/fire/firestore';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifier-frequence-radio',
  templateUrl: './modifier-frequence-radio.component.html',
  styleUrls: ['./modifier-frequence-radio.component.scss'],
})
export class ModifierFrequenceRadioComponent  implements OnInit {

  nom:string="";
  fr:number=0;
  radio : {
    nom:string,
    frequence:number
  } ={
    nom:"",
    frequence:0
  };
  invalid:string="";
  constructor(private firestore :Firestore,private router : Router) { }

  ngOnInit() {}

  

  onSubmit(form:NgForm){
    if (this.nom===""||this.fr===0) {
      this.invalid="Invalid"
    } else {
      this.radio.nom=this.nom;
      this.radio.frequence=this.fr
      const userRef = collection(this.firestore,'Radios');
      addDoc(userRef,this.radio);
    // setDoc(doc(userRef,userr.uid),user)
    this.invalid="";
    this.router.navigate(["/admin/accueilsuperadmin/listradio"])
    }
   
    

  }
}
