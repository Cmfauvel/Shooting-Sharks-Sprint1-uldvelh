import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamBookComponent } from './param-book.component';

describe('ParamBookComponent', () => {
  let component: ParamBookComponent;
  let fixture: ComponentFixture<ParamBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
