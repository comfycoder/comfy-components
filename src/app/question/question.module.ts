import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { QuestionService } from './question.service';
import { QuestionControlService } from './question-control.service';
import { QuestionTextboxComponent } from './question-textbox/question-textbox.component';
import { QuestionDropdownComponent } from './question-dropdown/question-dropdown.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  exports: [
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ]
})
export class QuestionModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: QuestionModule,
      providers: [
        QuestionService,
        QuestionControlService
      ]
    };
  }
}
