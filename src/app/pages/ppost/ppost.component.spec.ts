import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpostComponent } from './ppost.component';

describe('PpostComponent', () => {
  let component: PpostComponent;
  let fixture: ComponentFixture<PpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
