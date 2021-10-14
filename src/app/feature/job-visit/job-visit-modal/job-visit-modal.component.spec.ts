import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobVisitModalComponent } from './job-visit-modal.component';

describe('JobVisitModalComponent', () => {
  let component: JobVisitModalComponent;
  let fixture: ComponentFixture<JobVisitModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobVisitModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobVisitModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
