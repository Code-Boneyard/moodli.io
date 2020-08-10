import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssembliesListComponent } from './assemblies-list.component';

describe('AssembliesListComponent', () => {
  let component: AssembliesListComponent;
  let fixture: ComponentFixture<AssembliesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembliesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssembliesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
