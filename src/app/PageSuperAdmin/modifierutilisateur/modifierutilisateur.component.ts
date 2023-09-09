import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';


@Component({
  selector: 'app-modifierutilisateur',
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.scss'],
})
export class ModifierutilisateurComponent  implements OnInit {
  userForm: FormGroup;
  data: any;
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
    private formBuilder: FormBuilder, private _service: UtilisateurService,
  ) {
  
    this.userForm = this.formBuilder.group({
      id:'',
      nom: '',
      img: '',
      role:'',
     
    });
  }

  
  ngOnInit(): void {
    
    this.userForm.patchValue(this.data);


  }
  ////////////////////////////////
   ///LAFIN
   onSubmit(){}
    }
      //ESSATIONS
