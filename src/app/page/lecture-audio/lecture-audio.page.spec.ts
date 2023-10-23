import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LectureAudioPage } from './lecture-audio.page';

describe('LectureAudioPage', () => {
  let component: LectureAudioPage;
  let fixture: ComponentFixture<LectureAudioPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LectureAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
