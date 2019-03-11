import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoPage } from './terco.page';

describe('TercoPage', () => {
  let component: TercoPage;
  let fixture: ComponentFixture<TercoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TercoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TercoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
