import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBenchmarksComponent } from './manage-benchmarks.component';

describe('ManageBenchmarksComponent', () => {
  let component: ManageBenchmarksComponent;
  let fixture: ComponentFixture<ManageBenchmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageBenchmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBenchmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
