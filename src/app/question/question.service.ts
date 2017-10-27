import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';
import { QuestionTextboxComponent } from './question-textbox/question-textbox.component';
import { QuestionDropdownComponent } from './question-dropdown/question-dropdown.component';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    const questions: QuestionBase<any>[] = [

      new QuestionDropdownComponent({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
      }),

      new QuestionTextboxComponent({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new QuestionTextboxComponent({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
