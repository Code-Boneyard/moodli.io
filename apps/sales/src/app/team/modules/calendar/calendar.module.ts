import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { RouterModule } from '@angular/router';

import { ReminderService } from './services/reminder.service';
import { EventService } from './services/event.service';
import { CalendarService } from './services/calendar.service';

import { CalendarLayoutComponent } from './layout/calendar-layout/calendar-layout.component';
import { NewEventComponent } from './components/modals/new-event/new-event.component';
import { EditEventComponent } from './components/modals/edit-event/edit-event.component';
import { UpcomingEventsComponent } from './components/widgets/upcoming-events/upcoming-events.component';
import { WeekViewComponent } from './components/widgets/week-view/week-view.component';
import { MonthViewComponent } from './components/widgets/month-view/month-view.component';

@NgModule({
  declarations: [
    CalendarLayoutComponent,
    EditEventComponent,
    NewEventComponent,
    UpcomingEventsComponent,
    MonthViewComponent,
    WeekViewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  providers: [
    CalendarService,
    EventService,
    ReminderService
  ],
  entryComponents: [
    // Put Modals Here
  ]
})
export class CalendarModule { }
