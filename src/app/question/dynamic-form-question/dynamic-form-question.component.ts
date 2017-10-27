import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'df-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.scss']
})
export class DynamicFormQuestionComponent implements OnInit {

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }

  constructor() { }

  ngOnInit() {
  }

  onBlur($event) {
    const key = $event.target.id;
    const value = this.form.controls[this.question.key].value;
    console.log('onBlur fired for ' + key + ' = ' + value);
  }

  onChange($event) {
    const key = $event.target.id;
    const value = this.form.controls[this.question.key].value;
    console.log('onChange fired for ' + key + ' = ' + value);
  }
}
