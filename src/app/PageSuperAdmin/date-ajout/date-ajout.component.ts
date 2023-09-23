import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CalendrierService } from '../calendrier.service';

@Component({
  selector: 'app-date-ajout',
  templateUrl: './date-ajout.component.html',
  styleUrls: ['./date-ajout.component.scss'],
})
export class DateAjoutComponent  implements OnInit {
mesureForm: FormGroup;
constructor(private _dialogRef: MatDialogRef<DateAjoutComponent>,
  private formBuilder: FormBuilder, private _dialog: MatDialog, private _service: CalendrierService, private router: Router,@Inject(MAT_DIALOG_DATA) public data: any
) {

  this.mesureForm = this.formBuilder.group({
    id:'',
    dateFransais: ['', Validators.required],
   
  });
}

  ngOnInit() {
    this.mesureForm.patchValue(this.data);
    this.mesureForm = this.formBuilder.group({
      id:'',
      dateFransais: ['', Validators.required],
     
    });
  }

  onSubmit() {
    if (this.mesureForm.valid) {
      const mesure = this.mesureForm.value;
      
  
      if (this.data) {
        
      
        
           
        this._service
        .modifydate(this.data.id, this.mesureForm.value);
        
        this.mesureForm.reset();
        // Émettez un événement pour indiquer que les données ont été ajoutées
        this._service.triggerUpdate();
        this._dialogRef.close(true);
        
      
      } }

}
}
