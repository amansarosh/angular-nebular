import { Component, OnInit, Inject } from '@angular/core';
import { NB_WINDOW, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];

  constructor(private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window) {
  }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => this.window.alert(`${title} was clicked!`));
  }

  base64image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
}
