import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OchildComponent } from './ochild.component';

describe('OchildComponent', () => {
  let component: OchildComponent;
  let fixture: ComponentFixture<OchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
