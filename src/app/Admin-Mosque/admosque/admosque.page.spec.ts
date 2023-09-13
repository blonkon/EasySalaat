import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdmosquePage } from './admosque.page';

describe('AdmosquePage', () => {
  let component: AdmosquePage;
  let fixture: ComponentFixture<AdmosquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AdmosquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
