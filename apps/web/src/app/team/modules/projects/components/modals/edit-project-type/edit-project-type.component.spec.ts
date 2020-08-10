import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectTypeComponent } from './edit-project-type.component';

describe('EditProjectTypeComponent', () => {
  let component: EditProjectTypeComponent;
  let fixture: ComponentFixture<EditProjectTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
