import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { CaseService } from '../../services/case.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  get value() {
    return this.form.value;
  }

  constructor(
    private qcs: QuestionControlService,
    private caseService: CaseService
  ) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);

    // console.log(this.form.value);

    // const tmp1 = this.caseService.pascalcaseKeysDeep(this.form.value);

    // console.log(tmp1);

    // const tmp2 = this.caseService.camelcaseKeysDeep(tmp1);

    // console.log(tmp2);
  }
}
