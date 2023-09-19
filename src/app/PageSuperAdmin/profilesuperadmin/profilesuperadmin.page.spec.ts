import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilesuperadminPage } from './profilesuperadmin.page';

describe('ProfilesuperadminPage', () => {
  let component: ProfilesuperadminPage;
  let fixture: ComponentFixture<ProfilesuperadminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilesuperadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
