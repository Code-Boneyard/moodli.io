import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssemblyDetailComponent } from './assembly-detail.component';

describe('AssemblyDetailComponent', () => {
  let component: AssemblyDetailComponent;
  let fixture: ComponentFixture<AssemblyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssemblyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssemblyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
