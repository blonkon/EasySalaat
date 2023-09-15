import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeFrequenceRadioComponent } from './liste-frequence-radio.component';

describe('ListeFrequenceRadioComponent', () => {
  let component: ListeFrequenceRadioComponent;
  let fixture: ComponentFixture<ListeFrequenceRadioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeFrequenceRadioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeFrequenceRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
