import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { Firestore, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { AdminMosqueService } from '../admin-mosque.service';

@Component({
  selector: 'app-modifieradmin-mosque',
  templateUrl: './modifieradmin-mosque.component.html',
  styleUrls: ['./modifieradmin-mosque.component.scss'],
})
export class ModifieradminMosqueComponent  implements OnInit {


  data: any;
  userForm: FormGroup;
  mail? : string;
  nom? : string;
  rolem?:string;
  role: string[] = [
    'utilisateur',
    'admin',
    'admin-mosque',
    'super-admin',
  ];
  mosque: string[] = [
    'alfirdaous',
    'masdjid-kabir',
    'missiriba',
    'mosque de djene',
  ];
  constructor(
    private formBuilder: FormBuilder, private router :Router,private _service: AdminMosqueService,private firestore:Firestore
  ) {
  
    this.userForm = this.formBuilder.group({
      id:'',
      nom: '',
      img: '',
      role:'',
     
    });
  }

  
  ngOnInit(): void {
    this.mail=this._service.modifMail;
    this.nom =this._service.modifNom;
    this.userForm.patchValue(this.data);

  }
  ////////////////////////////////
   ///LAFIN
  
      async onSubmit(forms : NgForm) {
        console.log(this._service.modifNom)
        const q = query(collection(this.firestore, "Users"), where("email", "==", this.mail));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(async (docr) => {
          // console.log(docr.id, " => ", docr.data()); 
          const washingtonRef = doc(this.firestore, "Users", docr.id);
          if (this.rolem==="utilisateur") {
            await updateDoc(washingtonRef, {
              role: 0
              });
              await deleteDoc(doc(this.firestore,"Mosques",docr.id));
          } else if (this.rolem="admin") {
            await updateDoc(washingtonRef, {
              role: 2
              });
              await deleteDoc(doc(this.firestore,"Mosques",docr.id));
          } else if (this.rolem="super-admin") {
            await updateDoc(washingtonRef, {
              role: 3
              });
              await deleteDoc(doc(this.firestore,"Mosques",docr.id));
          }
          else {
            await updateDoc(washingtonRef, {
              role: 1
              });
          }
         
        });
    
            // console.log(this.rolem)
            
            // this.listeUtilisateur.data=[];
            // this.listeUtilisateur.liste();
            this.router.navigate(["/admin/accueilsuperadmin/listadminmos"])
            }

}
