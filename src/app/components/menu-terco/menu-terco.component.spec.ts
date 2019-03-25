import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTercoPage } from './menu-terco.page';

describe('MenuTercoPage', () => {
  let component: MenuTercoPage;
  let fixture: ComponentFixture<MenuTercoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTercoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTercoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
