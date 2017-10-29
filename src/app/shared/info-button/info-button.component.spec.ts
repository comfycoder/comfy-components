import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { InfoButtonComponent } from './info-button.component';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

describe('InfoButtonComponent', () => {
  let component: InfoButtonComponent;
  let fixture: ComponentFixture<InfoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        InfoButtonComponent,
        MessageDialogComponent
      ],
      providers: [],
      schemas: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
