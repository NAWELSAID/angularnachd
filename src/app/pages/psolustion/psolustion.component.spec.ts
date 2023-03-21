import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsolustionComponent } from './psolustion.component';

describe('PsolustionComponent', () => {
  let component: PsolustionComponent;
  let fixture: ComponentFixture<PsolustionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsolustionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PsolustionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
