import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modifierutilisateur',
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.scss'],
})
export class ModifierutilisateurComponent  implements OnInit {
  userForm: FormGroup;
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
  constructor(private _dialogRef: MatDialogRef<ModifierutilisateurComponent>,
    private formBuilder: FormBuilder, private _dialog: MatDialog, private _service: UtilisateurService,@Inject(MAT_DIALOG_DATA) public data:any
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
  
      onSubmit() {
        if (this.userForm.valid) {
          const mesure = this.userForm.value; 
          if (this.data) {         
            this._service
            .modifyUtilisateur(this.data.id, this.userForm.value);
            this.userForm.reset();
            // Émettez un événement pour indiquer que les données ont été ajoutées
            this._service.triggerUpdate();
            this._dialogRef.close(true);          
          } else {
              this.userForm.reset(); 
              }
          }
        }
    }
      //ESSATIONS
