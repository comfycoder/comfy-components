import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageHeaderComponent } from './page-header/page-header.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { InputNumericComponent } from './input-numeric/input-numeric.component';
import { MyCurrencyPipe } from './my-currency.pipe';
import { MyCurrencyFormatterDirective } from './my-currency-formatter.directive';
import { InputFilterDirective } from './input-filter.directive';
import { MyNumericFormatterDirective } from './my-numeric-formatter.directive';
import { MyPercentFormatterDirective } from './my-percent-formatter.directive';
import { MyNumericPipe } from './my-numeric.pipe';
import { MyPercentPipe } from './my-percent.pipe';
import { RxRadioButtonComponent } from './rx-radio-button/rx-radio-button.component';
import { QuestionGroupComponent } from './question-group/question-group.component';
import { InfoButtonComponent } from './info-button/info-button.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    SpinnerComponent,
    InputNumericComponent,
    RxRadioButtonComponent,
    MessageDialogComponent,
    InfoButtonComponent,
    QuestionGroupComponent,
    MyCurrencyPipe,
    MyCurrencyFormatterDirective,
    InputFilterDirective,
    MyNumericFormatterDirective,
    MyPercentFormatterDirective,
    MyNumericPipe,
    MyPercentPipe
  ],
  exports: [
    PageHeaderComponent,
    PageFooterComponent,
    SpinnerComponent,
    InputNumericComponent,
    RxRadioButtonComponent,
    MessageDialogComponent,
    InfoButtonComponent,
    QuestionGroupComponent,
    MyCurrencyPipe,
    MyCurrencyFormatterDirective,
    InputFilterDirective,
    MyNumericPipe,
    MyNumericFormatterDirective,
    MyPercentPipe,
    MyPercentFormatterDirective
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        MyCurrencyPipe,
        MyNumericPipe,
        MyPercentPipe
      ]
    };
  }
}
