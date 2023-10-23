import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NomsPage } from './noms.page';

describe('NomsPage', () => {
  let component: NomsPage;
  let fixture: ComponentFixture<NomsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NomsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
