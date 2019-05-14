import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissaPage } from './missa.page';

describe('MissaPage', () => {
  let component: MissaPage;
  let fixture: ComponentFixture<MissaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
