import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignFolderComponent } from './assign-folder.component';

describe('AssignFolderComponent', () => {
  let component: AssignFolderComponent;
  let fixture: ComponentFixture<AssignFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
