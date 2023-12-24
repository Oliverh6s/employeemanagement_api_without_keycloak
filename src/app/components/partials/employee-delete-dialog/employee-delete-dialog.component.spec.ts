import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeleteDialogComponent } from './employee-delete-dialog.component';

describe('EmployeeDeleteDialogComponent', () => {
  let component: EmployeeDeleteDialogComponent;
  let fixture: ComponentFixture<EmployeeDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDeleteDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
