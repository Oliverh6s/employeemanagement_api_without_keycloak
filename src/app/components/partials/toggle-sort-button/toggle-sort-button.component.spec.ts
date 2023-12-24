import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleSortButtonComponent } from './toggle-sort-button.component';

describe('ToggleSortButtonComponent', () => {
  let component: ToggleSortButtonComponent;
  let fixture: ComponentFixture<ToggleSortButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleSortButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToggleSortButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
