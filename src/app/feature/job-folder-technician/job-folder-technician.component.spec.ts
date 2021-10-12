import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFolderTechnicianComponent } from './job-folder-technician.component';

describe('JobFolderTechnicianComponent', () => {
  let component: JobFolderTechnicianComponent;
  let fixture: ComponentFixture<JobFolderTechnicianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFolderTechnicianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFolderTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
