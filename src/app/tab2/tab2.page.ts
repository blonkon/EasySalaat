import { Component } from '@angular/core';
import { SourateComponent } from '../component/sourate/sourate.component';
import { ListeLectureComponent } from '../component/liste-lecture/liste-lecture.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  SearchText: any;
  show:boolean = true;

  sourate= SourateComponent;
  liste= ListeLectureComponent;

  constructor() {}

}
