import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder , FormGroup, NgForm} from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modifierutilisateur',
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.scss'],
})
export class ModifierutilisateurComponent  implements OnInit {
  data: any;
  userForm: FormGroup;
  role: string[] = [
    'utilisateur',
    'admin-mosque',
    
  ];
  rolem?:string;
  mosque: string[] = [
    'alfirdaous',
    'masdjid-kabir',
    'missiriba',
    'mosque de djene',
  ];
  mail? : string;
  nom? : string;
  constructor(
    private formBuilder: FormBuilder, private _service: UtilisateurService,  ) {
    
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
    console.log(this._service.userdetails)
    this.userForm.patchValue(this.data);


  }
  ////////////////////////////////
   ///LAFIN
  
      onSubmit(forms : NgForm) {
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
        console.log(this.rolem)
        }
    }
      //ESSATIONS
