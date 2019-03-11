import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoePage } from './doe.page';

describe('DoePage', () => {
  let component: DoePage;
  let fixture: ComponentFixture<DoePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
