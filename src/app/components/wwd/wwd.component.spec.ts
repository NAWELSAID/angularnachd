import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WwdComponent } from './wwd.component';

describe('WwdComponent', () => {
  let component: WwdComponent;
  let fixture: ComponentFixture<WwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
