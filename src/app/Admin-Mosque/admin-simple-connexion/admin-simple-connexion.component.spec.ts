import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminSimpleConnexionComponent } from './admin-simple-connexion.component';

describe('AdminSimpleConnexionComponent', () => {
  let component: AdminSimpleConnexionComponent;
  let fixture: ComponentFixture<AdminSimpleConnexionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSimpleConnexionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminSimpleConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
