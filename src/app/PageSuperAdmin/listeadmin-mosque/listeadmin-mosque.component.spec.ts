import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListeadminMosqueComponent } from './listeadmin-mosque.component';

describe('ListeadminMosqueComponent', () => {
  let component: ListeadminMosqueComponent;
  let fixture: ComponentFixture<ListeadminMosqueComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeadminMosqueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListeadminMosqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
