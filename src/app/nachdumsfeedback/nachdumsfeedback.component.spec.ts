import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NachdumsfeedbackComponent } from './nachdumsfeedback.component';

describe('NachdumsfeedbackComponent', () => {
  let component: NachdumsfeedbackComponent;
  let fixture: ComponentFixture<NachdumsfeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NachdumsfeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NachdumsfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
