import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectTypeComponent } from './add-project-type.component';

describe('AddProjectTypeComponent', () => {
  let component: AddProjectTypeComponent;
  let fixture: ComponentFixture<AddProjectTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
