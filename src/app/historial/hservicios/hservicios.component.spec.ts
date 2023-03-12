import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HserviciosComponent } from './hservicios.component';

describe('HserviciosComponent', () => {
  let component: HserviciosComponent;
  let fixture: ComponentFixture<HserviciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HserviciosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HserviciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
