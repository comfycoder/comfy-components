import { Component, OnInit, Input } from '@angular/core';

import { QuestionInput } from '../../models/question-input';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'question-group',
  templateUrl: './question-group.component.html',
  styleUrls: ['./question-group.component.scss']
})
export class QuestionGroupComponent implements OnInit {

  @Input()
  question: QuestionInput;

  constructor() { }

  ngOnInit() {
  }

}
