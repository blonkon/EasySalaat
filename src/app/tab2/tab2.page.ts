import { Component } from '@angular/core';
import { SourateComponent } from '../component/sourate/sourate.component';
import { ListeLectureComponent } from '../component/liste-lecture/liste-lecture.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

     show:boolean = true;

    componentA= SourateComponent;
    componentB= ListeLectureComponent;
  constructor() {}

}
