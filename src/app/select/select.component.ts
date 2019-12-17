import { Component, OnInit } from '@angular/core';
import { NbComponentSize } from '@nebular/theme';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent  {

  selectedItem = '2';
  sizes: NbComponentSize[] = ['tiny', 'small', 'medium', 'large', 'giant'];

}
