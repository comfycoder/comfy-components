import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AppStateService } from '../../app-state.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  visible = false;
  visibleAnimate = false;

  @ViewChild('messagecontent') containerEl: ElementRef;

  constructor(
    private router: Router,
    private AppStateService: AppStateService
  ) { }

  public show(): void {
    this.visible = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public handleCancel(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
  }

  public handleOK(): void {
    this.visibleAnimate = false;
    setTimeout(() => this.visible = false, 300);
    const url = this.AppStateService.redirectUrl;
    this.router.navigate([url]);
  }
}
