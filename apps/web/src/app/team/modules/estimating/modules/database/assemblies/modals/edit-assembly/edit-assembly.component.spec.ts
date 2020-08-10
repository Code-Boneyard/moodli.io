import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAssemblyComponent } from './edit-assembly.component';

describe('EditAssemblyComponent', () => {
  let component: EditAssemblyComponent;
  let fixture: ComponentFixture<EditAssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
