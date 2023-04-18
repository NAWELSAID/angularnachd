import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AprojectComponent } from './aproject.component';

describe('AprojectComponent', () => {
  let component: AprojectComponent;
  let fixture: ComponentFixture<AprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AprojectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
