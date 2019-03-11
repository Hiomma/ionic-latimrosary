import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerOracaoPage } from './ver-oracao.page';

describe('VerOracaoPage', () => {
  let component: VerOracaoPage;
  let fixture: ComponentFixture<VerOracaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerOracaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerOracaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
