import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OracaoPage } from './oracao.page';

describe('OracaoPage', () => {
  let component: OracaoPage;
  let fixture: ComponentFixture<OracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OracaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
