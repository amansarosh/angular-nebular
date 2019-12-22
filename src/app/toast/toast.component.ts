import { Component, OnInit, HostBinding } from '@angular/core';
import { NbToastrService } from '@nebular/theme';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  private index: number = 0;

  @HostBinding('class')
  classes = 'example-items-rows';

  constructor(private toastrService: NbToastrService) {
  }

  showToast(position) {
    this.toastrService.show(
      'This is super toast message',
      `This is toast number: ${++this.index}`,
      { position });
  }


}
