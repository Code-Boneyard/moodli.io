import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionsListComponent } from './unions-list.component';

describe('UnionsListComponent', () => {
  let component: UnionsListComponent;
  let fixture: ComponentFixture<UnionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
