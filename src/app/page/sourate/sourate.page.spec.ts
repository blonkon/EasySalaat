import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SouratePage } from './sourate.page';

describe('SouratePage', () => {
  let component: SouratePage;
  let fixture: ComponentFixture<SouratePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SouratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
