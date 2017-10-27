import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[myInputFilter]'
})
export class InputFilterDirective implements OnInit, OnDestroy {

  // private allNumbers = '0123456789';
  // private allLowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  // private allUpperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // private specialChars = '`~!@#$%^&*()-_=+[]{}\|;:\'\",./<>?';
  private dollarsFormatted = '0123456789,.$';
  private percentFormatted = '0123456789.%';
  private numberFormatted = '0123456789,.';
  private numericFormatted = '0123456789';
  private alphaNumericFormatted = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private nameFormatted = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-. ' ;
  private dateFormatted = '0123456789/';

  private el: HTMLInputElement;

  // tslint:disable-next-line:no-input-rename
  @Input('myInputFilter') filterName: string;

  constructor(
    private ref: ElementRef
  ) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {

    this.el.addEventListener('keypress', e => {

      const keyCode = e.which || e.keyCode;             // Get the keyCode pressed from the event.
      const keyCodeChar = String.fromCharCode(keyCode); // Determine the char from the keyCode.

      const isAllowed = this.validateCharacter(keyCodeChar);
      if (!isAllowed) {
        event.preventDefault();
        return false;
      }
    });

    this.el.addEventListener('paste', e => {
      const data = e.clipboardData.getData('text/plain');
      console.log(data);
      e.returnValue = false;
      const newValue = this.removeIllegalCharacters(data);
      this.el.value = newValue;
    });
  }

  ngOnDestroy() {
    this.el.removeEventListener('keypress', () => {});
    this.el.removeEventListener('paste', () => {});
  }

  isControlKey(charCode) {

    if (charCode >= 32) {
      return false;
    }

    if (charCode === 10) {
      return false;
    }

    if (charCode === 13) {
      return false;
    }

    return true;
  }

  validateCharacter(input) {

    let isAllowed = false;
    let allowedCharacters = '';

    switch (this.filterName) {

      case 'dollarsFormatted':
        allowedCharacters = this.dollarsFormatted;
        break;

      case 'percentFormatted':
        allowedCharacters = this.percentFormatted;
        break;

      case 'numberFormatted':
        allowedCharacters = this.numberFormatted;
        break;

      case 'numericFormatted':
        allowedCharacters = this.numericFormatted;
        break;

      case 'alphaNumericFormatted':
        allowedCharacters = this.alphaNumericFormatted;
        break;

      case 'nameFormatted':
        allowedCharacters = this.nameFormatted;
        break;

      case 'dateFormatted':
        allowedCharacters = this.dateFormatted;
        break;
    }

    if (allowedCharacters && allowedCharacters.length > 0) {

      const count = allowedCharacters.length;

      for (let i = 0; i < count; i++) {

        const allowedCharacter = allowedCharacters[i];

        if (allowedCharacter === input) {
          isAllowed = true;
          break;
        }
      }
    }

    return isAllowed;
  }

  // validateCharacter(input) {
  //   const exp = new RegExp('/' + this.expression + '/');
  //   const isAllowed = exp.test(input);
  //   return isAllowed;
  // }

  removeIllegalCharacters(input: string) {
    let newValue = '';
    for (let i = 0; i < input.length; i++) {
      const c = input.charAt(i);
      const isAllowed = this.validateCharacter(c);
      if (isAllowed) {
        newValue += c;
      }
    }
    return newValue;
  }
}
