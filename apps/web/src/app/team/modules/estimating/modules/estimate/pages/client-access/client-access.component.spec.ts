import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAccessComponent } from './client-access.component';

describe('ClientAccessComponent', () => {
  let component: ClientAccessComponent;
  let fixture: ComponentFixture<ClientAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
