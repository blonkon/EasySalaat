import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifierFrequenceRadioComponent } from './modifier-frequence-radio.component';

describe('ModifierFrequenceRadioComponent', () => {
  let component: ModifierFrequenceRadioComponent;
  let fixture: ComponentFixture<ModifierFrequenceRadioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierFrequenceRadioComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifierFrequenceRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
