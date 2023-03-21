import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StorisComponent } from './storis.component';

describe('StorisComponent', () => {
  let component: StorisComponent;
  let fixture: ComponentFixture<StorisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StorisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StorisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
