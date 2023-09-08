import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeLecturePage } from './liste-lecture.page';

describe('ListeLecturePage', () => {
  let component: ListeLecturePage;
  let fixture: ComponentFixture<ListeLecturePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListeLecturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
