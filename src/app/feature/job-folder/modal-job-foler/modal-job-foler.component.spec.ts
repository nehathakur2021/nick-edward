import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalJobFolerComponent } from './modal-job-foler.component';

describe('ModalJobFolerComponent', () => {
  let component: ModalJobFolerComponent;
  let fixture: ComponentFixture<ModalJobFolerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalJobFolerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalJobFolerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
