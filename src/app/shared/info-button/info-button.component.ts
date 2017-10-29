import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';

import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'info-button',
  templateUrl: './info-button.component.html',
  styleUrls: ['./info-button.component.scss']
})
export class InfoButtonComponent implements OnInit {

  @Input() content: string;
  @ViewChild('messagedlg') private messageDialogComponent: MessageDialogComponent;

  constructor() { }

  ngOnInit() {
  }

  showMessage($event) {
    $event.preventDefault();
    this.messageDialogComponent.show();
  }
}
