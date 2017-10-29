import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxRadioButtonComponent } from './rx-radio-button.component';

describe('RxRadioButtonComponent', () => {
  let component: RxRadioButtonComponent;
  let fixture: ComponentFixture<RxRadioButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxRadioButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxRadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
