import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassificationsListComponent } from './classifications-list.component';

describe('ClassificationsListComponent', () => {
  let component: ClassificationsListComponent;
  let fixture: ComponentFixture<ClassificationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassificationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassificationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
