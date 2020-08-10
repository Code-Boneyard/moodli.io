import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAssembliesComponent } from './manage-assemblies.component';

describe('ManageAssembliesComponent', () => {
  let component: ManageAssembliesComponent;
  let fixture: ComponentFixture<ManageAssembliesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageAssembliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageAssembliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
