import { Component, OnInit } from '@angular/core';

import { RxRadioButtonComponent } from '../shared/rx-radio-button/rx-radio-button.component';

import { OptionItem, QuestionInput } from '../models';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  options: OptionItem[] = [];

  question: QuestionInput;

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.populateOptions();

    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      food: 2
    });
  }

  populateOptions() {

    this.question = new QuestionInput('food', 'What would you like to eat?', 'Only choose a food item that you are not alergic to.');
    this.options.push(new OptionItem('beef', 'Beef', 'food', 1, 10, ''));
    this.options.push(new OptionItem('lamb', 'Lamb', 'food', 2, 20, ''));
    this.options.push(new OptionItem('fish', 'Fish', 'food', 3, 30, ''));
  }
}
