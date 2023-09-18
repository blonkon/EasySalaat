import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { Router } from '@angular/router';
import { Firestore, collection, doc, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
import { AdminService } from '../admin.service';
import { Mosques } from 'src/app/models/Moques';

@Component({
  selector: 'app-modifieradmin',
  templateUrl: './modifieradmin.component.html',
  styleUrls: ['./modifieradmin.component.scss'],
})
export class ModifieradminComponent  implements OnInit {

  data: any;
  userForm: FormGroup;
  role: string[] = [
    'utilisateur',
    'admin',
    'admin-mosque',
    'super-admin',
  ];
  rolem?:string;
  mail? : string;
  nom? : string;
  mosque:Mosques  = {
    nom:"Ma mosque",
    iman:"Iman",
    admin_mail:"",
    tel:0
}
  constructor(private router: Router,
    private formBuilder: FormBuilder, private _service: AdminService,private firestore :Firestore
  ) {
  
    this.userForm = this.formBuilder.group({
      id:'',
      nom: '',
      img: '',
      role:'',
     
    });
  }

  
  ngOnInit(): void {
    this.mail=this._service.userdetails;
    this.nom =this._service.usernom;
    this.userForm.patchValue(this.data);
  }
  ////////////////////////////////
   ///LAFIN
  
   async onSubmit(forms : NgForm) {
    // if (this.userForm.valid) {
    //   const mesure = this.userForm.value; 
    //   if (this.data) {      
    //     console.log(this.data)   
    //     this._service
    //     .modifyUtilisateur(this.data.id, this.userForm.value);
    //     this.userForm.reset();
    //     // Émettez un événement pour indiquer que les données ont été ajoutées
    //     this._service.triggerUpdate();
                 
    //   } else {
    //       this.userForm.reset(); 
    //       }
    //   }
   
const q = query(collection(this.firestore, "Users"), where("email", "==", this.mail));
const querySnapshot = await getDocs(q);
querySnapshot.forEach(async (docr) => {
  // console.log(docr.id, " => ", docr.data()); 
  const washingtonRef = doc(this.firestore, "Users", docr.id);
  
  


  if (this.rolem==="admin-mosque") {
    await updateDoc(washingtonRef, {
      role: 1
      });
         this.mosque.admin_mail=this.mail
         const userRef = collection(this.firestore,'Mosques');
          setDoc(doc(userRef,docr.id),this.mosque)
      // this.mosque.admin_mail=this.mail
    //  const userRef = collection(this.firestore,'Mosques');
    //   setDoc(doc(userRef,docr.id),this.mosque)
  } else if (this.rolem==="utilisateur") {
    await updateDoc(washingtonRef, {
      role: 0
      });
    
  } else if (this.rolem==="super-admin") {
    await updateDoc(washingtonRef, {
      role: 3
      });
  }else{
    await updateDoc(washingtonRef, {
      role: 2
      });
  }
 
});

    // console.log(this.rolem)
    
    this.router.navigate(["/admin/accueilsuperadmin/listadmin"])
    }
       
}
