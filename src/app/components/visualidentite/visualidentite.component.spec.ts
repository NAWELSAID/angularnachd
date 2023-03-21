import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualidentiteComponent } from './visualidentite.component';

describe('VisualidentiteComponent', () => {
  let component: VisualidentiteComponent;
  let fixture: ComponentFixture<VisualidentiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualidentiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualidentiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
