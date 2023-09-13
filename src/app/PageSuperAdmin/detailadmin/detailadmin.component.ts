import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detailadmin',
  templateUrl: './detailadmin.component.html',
  styleUrls: ['./detailadmin.component.scss'],
})
export class DetailadminComponent  implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {}
  // backtolist(){
  //   this.router.navigate(['/admin/accueilsuperadmin']);
  // }

}
