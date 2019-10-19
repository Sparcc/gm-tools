import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcManagementPage } from './npc-management.page';

describe('NpcManagementPage', () => {
  let component: NpcManagementPage;
  let fixture: ComponentFixture<NpcManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
