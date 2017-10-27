import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { QuestionService } from '../question/question.service';
import { QuestionBase } from '../question/question-base';
import { DynamicFormComponent } from '../question/dynamic-form/dynamic-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title: string = 'Forms';

  questions: QuestionBase<any>[];

  id: string = 'myInput';
  label: string = 'FirstName';
  placeholder: string = 'Enter First Name';

  amount: string = '1,234';

  @ViewChild('dynamicForm') dynamicForm: DynamicFormComponent;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
    this.questions.forEach((item) => {
      console.log(item.key);
    });
  }

  onSubmit() {
    const formValues = this.dynamicForm.value;

    console.log(formValues);
  }

  onAmountChange($event) {
    const el = <HTMLInputElement>$event.target;
    console.log(el);
    const key = el.id;
    const value = el.value;
    console.log('onAmountChange fired for ' + key + ' = ' + value);
  }
}
