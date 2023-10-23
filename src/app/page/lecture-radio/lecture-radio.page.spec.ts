import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LectureRadioPage } from './lecture-radio.page';

describe('LectureRadioPage', () => {
  let component: LectureRadioPage;
  let fixture: ComponentFixture<LectureRadioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LectureRadioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
