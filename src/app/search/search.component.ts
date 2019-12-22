import { Component, OnInit } from '@angular/core';
import { NbSearchService } from '@nebular/theme';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  value = '';

  constructor(private searchService: NbSearchService) {

    this.searchService.onSearchSubmit()
      .subscribe((data: any) => {
        this.value = data.term;
      })

  }


}
