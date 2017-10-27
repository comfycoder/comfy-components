import { Component, OnInit, Input, forwardRef, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';

const noop = () => { };

const INPUT_NUMERIC_CONTROL_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumericComponent),
  multi: true
};

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-numeric',
  providers: [INPUT_NUMERIC_CONTROL_ACCESSOR],
  templateUrl: './input-numeric.component.html',
  styleUrls: ['./input-numeric.component.scss']
})
export class InputNumericComponent implements ControlValueAccessor, OnInit {

  // The internal data model
  private innerValue: any = '';

  // Placeholders for the callbacks which are later providesd
  // by the Control Value Accessor
  private onTouch: Function = noop;
  private onModelChange: Function = noop;

  @ViewChild('input') input;
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() placeholder: string = '';

  // get accessor
  get value(): any {
    return this.innerValue;
  }

  // set accessor including call the onchange callback
  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onModelChange(v);
    }
  }

  constructor() { }

  ngOnInit() {
  }

  // onChange($event) {
  //   $event.preventDefault();
  //   $event.stopPropagation();
  //   // get value from text area
  //   const newValue = (<HTMLInputElement>event.target).value;

  //   if (newValue && newValue.length > 0) {

  //   }

  //   // update the form
  //   this.onModelChange(this.data);
  // }

  onBlur($event: FocusEvent) {
    $event.preventDefault();
    $event.stopPropagation();

    this.onTouch();
  }

  onFocus($event: FocusEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.onTouch();
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  // setDisabledState?(isDisabled: boolean): void {

  // }
}
