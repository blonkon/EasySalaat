import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccueilsuperadminPage } from './accueilsuperadmin.page';

describe('AccueilsuperadminPage', () => {
  let component: AccueilsuperadminPage;
  let fixture: ComponentFixture<AccueilsuperadminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AccueilsuperadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
