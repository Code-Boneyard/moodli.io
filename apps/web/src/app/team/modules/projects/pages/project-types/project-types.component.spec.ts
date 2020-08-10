import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTypesComponent } from './project-types.component';

describe('ProjectTypesComponent', () => {
  let component: ProjectTypesComponent;
  let fixture: ComponentFixture<ProjectTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
