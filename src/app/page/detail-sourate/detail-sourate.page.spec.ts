import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailSouratePage } from './detail-sourate.page';

describe('DetailSouratePage', () => {
  let component: DetailSouratePage;
  let fixture: ComponentFixture<DetailSouratePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailSouratePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
