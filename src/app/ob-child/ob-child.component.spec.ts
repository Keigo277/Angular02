import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObChildComponent } from './ob-child.component';

describe('ObChildComponent', () => {
  let component: ObChildComponent;
  let fixture: ComponentFixture<ObChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObChildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
