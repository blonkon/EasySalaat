import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeMosquePage } from './liste-mosque.page';

describe('ListeMosquePage', () => {
  let component: ListeMosquePage;
  let fixture: ComponentFixture<ListeMosquePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeMosquePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
