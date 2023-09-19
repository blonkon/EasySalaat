import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder , FormGroup} from '@angular/forms';
import { UtilisateurService } from '../utilisateur.service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-modifierutilisateur',
  templateUrl: './modifierutilisateur.component.html',
  styleUrls: ['./modifierutilisateur.component.scss'],
})
export class ModifierutilisateurComponent  implements OnInit {
  data: any;
  // userForm: FormGroup;
  role: string[] = [
    'utilisateur',
    'admin-mosque',
    
  ];
  mosque: string[] = [
    'alfirdaous',
    'masdjid-kabir',
    'missiriba',
    'mosque de djene',
  ];
  constructor(private navCtrl: NavController,
    private formBuilder: FormBuilder, private _service: UtilisateurService,
  ) {
  
    // this.userForm = this.formBuilder.group({
    //   id:'',
    //   nom: '',
    //   img: '',
    //   role:'',
     
    // });
  }

  
  ngOnInit(): void {
    
    // this.userForm.patchValue(this.data);


  }
  ////////////////////////////////
   ///LAFIN
  
      // onSubmit() {
      //   if (this.userForm.valid) {
      //     const mesure = this.userForm.value; 
      //     if (this.data) {         
      //       this._service
      //       .modifyUtilisateur(this.data.id, this.userForm.value);
      //       this.userForm.reset();
      //       // Émettez un événement pour indiquer que les données ont été ajoutées
      //       this._service.triggerUpdate();
                     
      //     } else {
      //         this.userForm.reset(); 
      //         }
      //     }
      //   }


        navigateToListUtilPage() {
          this.navCtrl.navigateForward('/superadmin/accueilsuperadmin/listutil');
        }
        onButtonClick() {
          this.navigateToListUtilPage();
        }
                
    }
      //ESSATIONS
