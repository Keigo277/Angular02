import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OparentComponent } from './oparent.component';

describe('OparentComponent', () => {
  let component: OparentComponent;
  let fixture: ComponentFixture<OparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
