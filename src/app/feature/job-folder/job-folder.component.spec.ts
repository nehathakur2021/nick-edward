import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobFolderComponent } from './job-folder.component';

describe('JobFolderComponent', () => {
  let component: JobFolderComponent;
  let fixture: ComponentFixture<JobFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
