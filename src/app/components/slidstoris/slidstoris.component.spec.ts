import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidstorisComponent } from './slidstoris.component';

describe('SlidstorisComponent', () => {
  let component: SlidstorisComponent;
  let fixture: ComponentFixture<SlidstorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlidstorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlidstorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
