import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolustionComponent } from './solustion.component';

describe('SolustionComponent', () => {
  let component: SolustionComponent;
  let fixture: ComponentFixture<SolustionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolustionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
