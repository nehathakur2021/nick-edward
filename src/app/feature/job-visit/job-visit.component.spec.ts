import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobVisitComponent } from './job-visit.component';

describe('JobVisitComponent', () => {
  let component: JobVisitComponent;
  let fixture: ComponentFixture<JobVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobVisitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
