import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerHeroComponent } from './career-hero.component';

describe('CareerHeroComponent', () => {
  let component: CareerHeroComponent;
  let fixture: ComponentFixture<CareerHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
