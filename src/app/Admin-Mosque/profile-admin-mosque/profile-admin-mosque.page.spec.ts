import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileAdminMosquePage } from './profile-admin-mosque.page';

describe('ProfileAdminMosquePage', () => {
  let component: ProfileAdminMosquePage;
  let fixture: ComponentFixture<ProfileAdminMosquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfileAdminMosquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
