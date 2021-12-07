import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeManagementComponent } from './zipcode-management.component';

describe('ZipcodeManagementComponent', () => {
  let component: ZipcodeManagementComponent;
  let fixture: ComponentFixture<ZipcodeManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipcodeManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipcodeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
