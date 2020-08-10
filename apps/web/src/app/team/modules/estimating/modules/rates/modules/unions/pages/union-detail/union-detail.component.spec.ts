import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionDetailComponent } from './union-detail.component';

describe('UnionDetailComponent', () => {
  let component: UnionDetailComponent;
  let fixture: ComponentFixture<UnionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
