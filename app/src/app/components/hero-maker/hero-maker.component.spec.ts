import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroMakerComponent } from './hero-maker.component';

describe('HeroMakerComponent', () => {
  let component: HeroMakerComponent;
  let fixture: ComponentFixture<HeroMakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroMakerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
