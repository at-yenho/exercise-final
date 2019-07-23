import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
})
export class CalendarHeaderComponent implements OnInit {
  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();
  ngOnInit() {
  }
}
