import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobVisitModuleComponent } from './job-visit-module.component';

describe('JobVisitModuleComponent', () => {
  let component: JobVisitModuleComponent;
  let fixture: ComponentFixture<JobVisitModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobVisitModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobVisitModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
