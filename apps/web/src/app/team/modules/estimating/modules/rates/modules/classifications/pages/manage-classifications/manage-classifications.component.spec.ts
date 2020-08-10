import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageClassificationsComponent } from './manage-classifications.component';

describe('ManageClassificationsComponent', () => {
  let component: ManageClassificationsComponent;
  let fixture: ComponentFixture<ManageClassificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageClassificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageClassificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
