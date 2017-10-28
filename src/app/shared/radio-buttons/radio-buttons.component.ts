import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'radio-buttons',
  templateUrl: './radio-buttons.component.html',
  styleUrls: ['./radio-buttons.component.scss']
})
export class RadioButtonsComponent implements OnInit {

  form = new FormGroup({
    food: new FormControl('lamb')
  });

  constructor() { }

  ngOnInit() {
  }

}
