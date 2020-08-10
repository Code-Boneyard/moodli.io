import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssemblyComponent } from './add-assembly.component';

describe('AddAssemblyComponent', () => {
  let component: AddAssemblyComponent;
  let fixture: ComponentFixture<AddAssemblyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssemblyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssemblyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
