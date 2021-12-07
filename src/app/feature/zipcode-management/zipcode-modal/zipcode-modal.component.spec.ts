import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipcodeModalComponent } from './zipcode-modal.component';

describe('ZipcodeModalComponent', () => {
  let component: ZipcodeModalComponent;
  let fixture: ComponentFixture<ZipcodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipcodeModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipcodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
