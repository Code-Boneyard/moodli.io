import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementsListComponent } from './agreements-list.component';

describe('AgreementsListComponent', () => {
  let component: AgreementsListComponent;
  let fixture: ComponentFixture<AgreementsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
