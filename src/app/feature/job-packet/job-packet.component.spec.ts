import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobPacketComponent } from './job-packet.component';

describe('JobPacketComponent', () => {
  let component: JobPacketComponent;
  let fixture: ComponentFixture<JobPacketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobPacketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobPacketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
