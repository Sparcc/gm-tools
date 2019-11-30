import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraitsPage } from './traits.page';

describe('TraitsPage', () => {
  let component: TraitsPage;
  let fixture: ComponentFixture<TraitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
