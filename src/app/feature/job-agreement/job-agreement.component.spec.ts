import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAgreementComponent } from './job-agreement.component';

describe('JobAgreementComponent', () => {
  let component: JobAgreementComponent;
  let fixture: ComponentFixture<JobAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
