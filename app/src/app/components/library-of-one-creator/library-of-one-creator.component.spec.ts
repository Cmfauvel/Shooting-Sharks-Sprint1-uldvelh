import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryOfOneCreatorComponent } from './library-of-one-creator.component';

describe('LibraryOfOneCreatorComponent', () => {
  let component: LibraryOfOneCreatorComponent;
  let fixture: ComponentFixture<LibraryOfOneCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryOfOneCreatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryOfOneCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
