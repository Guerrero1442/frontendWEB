import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorAddComponent } from './conductor-add.component';

describe('ConductorAddComponent', () => {
  let component: ConductorAddComponent;
  let fixture: ComponentFixture<ConductorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConductorAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
