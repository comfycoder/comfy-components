import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { OptionItem } from '../../models/option-item';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'rx-radio-button',
  templateUrl: './rx-radio-button.component.html',
  styleUrls: ['./rx-radio-button.component.scss']
})
export class RxRadioButtonComponent implements OnInit {

  @Input()
  controlName: string;

  @Input()
  parent: FormGroup;

  @Input() options: OptionItem[] = [];

  isChecked(id) {
    return this.parent.get(this.controlName).value === id;
  }

  constructor() { }

  ngOnInit() {
  }

}
