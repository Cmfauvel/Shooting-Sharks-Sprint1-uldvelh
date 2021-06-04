import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateChaptersComponent } from './create-chapters.component';

describe('CreateChaptersComponent', () => {
  let component: CreateChaptersComponent;
  let fixture: ComponentFixture<CreateChaptersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateChaptersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateChaptersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
