import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PstorisComponent } from './pstoris.component';

describe('PstorisComponent', () => {
  let component: PstorisComponent;
  let fixture: ComponentFixture<PstorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PstorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PstorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
