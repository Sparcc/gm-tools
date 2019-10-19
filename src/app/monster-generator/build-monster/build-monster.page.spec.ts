import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildMonsterPage } from './build-monster.page';

describe('BuildMonsterPage', () => {
  let component: BuildMonsterPage;
  let fixture: ComponentFixture<BuildMonsterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildMonsterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildMonsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
