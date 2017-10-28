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
import { RadioButtonsComponent } from './radio-buttons/radio-buttons.component';

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
    RadioButtonsComponent,
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
    RadioButtonsComponent,
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
