import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InfoMosqueServiceService } from '../info-mosque-service.service';

@Component({
  selector: 'app-update-info',
  templateUrl: './update-info.component.html',
  styleUrls: ['./update-info.component.scss'],
})
export class UpdateInfoComponent  implements OnInit {


  info : any={}
  isEditMode: boolean = false;
  id: number | undefined;
  

 
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private annonceService : InfoMosqueServiceService
  ) {
    
   }

  ngOnInit() {}

}
