import { Component, OnInit, ViewChild } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @ViewChild(NbPopoverDirective, { static: false }) popover: NbPopoverDirective;

  open() {
    this.popover.show();
  }

  close() {
    this.popover.hide();
  }
}
