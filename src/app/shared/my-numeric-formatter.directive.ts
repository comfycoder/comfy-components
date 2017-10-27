import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';
import { MyNumericPipe } from './my-numeric.pipe';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myNumericFormatter]'
})
export class MyNumericFormatterDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private numericPipe: MyNumericPipe
  ) { }

  ngOnInit() {
    this.el = this.elementRef.nativeElement;

    this.el.value = this.numericPipe.transform(this.el.value);
  }

  @HostListener('focus', ['$event.target.value'])
  onFocus(value) {
    this.el.value = this.numericPipe.parse(value); // opposite of transform
  }

  @HostListener('blur', ['$event.target.value'])
  onBlur(value) {
    this.el.value = this.numericPipe.transform(value);
  }
}
