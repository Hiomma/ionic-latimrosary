import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTercoPage } from './ver-terco.page';

describe('VerTercoPage', () => {
  let component: VerTercoPage;
  let fixture: ComponentFixture<VerTercoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerTercoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTercoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
