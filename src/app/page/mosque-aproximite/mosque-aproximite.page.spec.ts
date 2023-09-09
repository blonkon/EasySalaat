import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MosqueAproximitePage } from './mosque-aproximite.page';

describe('MosqueAproximitePage', () => {
  let component: MosqueAproximitePage;
  let fixture: ComponentFixture<MosqueAproximitePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MosqueAproximitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
