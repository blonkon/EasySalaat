import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterModifierCoranComponent } from './ajouter-modifier-coran.component';

describe('AjouterModifierCoranComponent', () => {
  let component: AjouterModifierCoranComponent;
  let fixture: ComponentFixture<AjouterModifierCoranComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterModifierCoranComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterModifierCoranComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
