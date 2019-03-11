import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatePage } from './contate.page';

describe('ContatePage', () => {
  let component: ContatePage;
  let fixture: ComponentFixture<ContatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
