import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyCatalogComponent } from './assembly-catalog.component';

describe('AssemblyCatalogComponent', () => {
  let component: AssemblyCatalogComponent;
  let fixture: ComponentFixture<AssemblyCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
