import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObParentComponent } from './ob-parent.component';

describe('ObParentComponent', () => {
  let component: ObParentComponent;
  let fixture: ComponentFixture<ObParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
