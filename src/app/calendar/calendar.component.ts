import { Component, OnInit } from '@angular/core';
import { NbCalendarRange, NbDateService } from '@nebular/theme';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  date = new Date();
  min = new Date(2018, 6, 15);
  max = new Date(2018, 8, 15);
  filter = date => date.getDay() !== 0 && date.getDay() !== 6;
  showWeekNumber = true;

  range: NbCalendarRange<Date>;

  constructor(protected dateService: NbDateService<Date>) {
    this.range = {
      start: this.dateService.addDay(this.monthStart, 3),
      end: this.dateService.addDay(this.monthEnd, -3),
    };
  }

  get monthStart(): Date {
    return this.dateService.getMonthStart(new Date());
  }

  get monthEnd(): Date {
    return this.dateService.getMonthEnd(new Date());
  }

  toggleWeekNumber() {
    this.showWeekNumber = !this.showWeekNumber;
  }

}
