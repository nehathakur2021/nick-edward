import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPacketModalComponent } from './job-packet-modal.component';

describe('JobPacketModalComponent', () => {
  let component: JobPacketModalComponent;
  let fixture: ComponentFixture<JobPacketModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPacketModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPacketModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
