import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HclientesComponent } from './hclientes.component';

describe('HclientesComponent', () => {
  let component: HclientesComponent;
  let fixture: ComponentFixture<HclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HclientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
