import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifieradminMosqueComponent } from './modifieradmin-mosque.component';

describe('ModifieradminMosqueComponent', () => {
  let component: ModifieradminMosqueComponent;
  let fixture: ComponentFixture<ModifieradminMosqueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifieradminMosqueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifieradminMosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
