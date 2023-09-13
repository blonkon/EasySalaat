import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageAccueilAdminMosquePage } from './page-accueil-admin-mosque.page';

describe('PageAccueilAdminMosquePage', () => {
  let component: PageAccueilAdminMosquePage;
  let fixture: ComponentFixture<PageAccueilAdminMosquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageAccueilAdminMosquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
