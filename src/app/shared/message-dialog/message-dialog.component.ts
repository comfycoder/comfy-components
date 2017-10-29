import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss']
})
export class MessageDialogComponent {

  visible = false;
  visibleAnimate = false;

  // @Input() content: string;
  @Input() closeOnBodyClick: string;
  @ViewChild('messagecontent') containerEl: ElementRef;

  constructor() { }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    event.preventDefault();
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
