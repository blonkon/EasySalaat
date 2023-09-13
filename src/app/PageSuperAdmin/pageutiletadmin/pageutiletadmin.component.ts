import { Component, OnInit } from '@angular/core';
import { Auth, User, onAuthStateChanged } from '@angular/fire/auth';
import { Firestore, doc, getDoc } from '@angular/fire/firestore';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-pageutiletadmin',
  templateUrl: './pageutiletadmin.component.html',
  styleUrls: ['./pageutiletadmin.component.scss'],
})
export class PageutiletadminComponent  implements OnInit {

  superUser: boolean=false;
  user : any;
  constructor( private data :DataService) { 
    
  }
  active(): boolean{
    this.superUser=this.data.superUser
        return this.superUser
        }
  ngOnInit() {}

}
