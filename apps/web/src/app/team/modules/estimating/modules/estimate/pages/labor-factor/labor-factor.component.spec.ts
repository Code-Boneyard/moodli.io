/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LaborFactorComponent } from './labor-factor.component';

describe('LaborFactorComponent', () => {
  let component: LaborFactorComponent;
  let fixture: ComponentFixture<LaborFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaborFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaborFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
