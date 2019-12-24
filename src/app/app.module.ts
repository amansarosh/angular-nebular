import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule, NbLayoutModule, NbCardModule, NbStepperModule, NbAccordionModule, NbListModule,
  NbTabsetModule, NbActionsModule, NbInputModule, NbButtonModule, NbRadioModule, NbSelectModule,
  NbPopoverModule, NbContextMenuModule, NbTooltipModule, NbSidebarModule, NbCheckboxModule,
  NbToggleModule, NbMenuModule, NbUserModule, NbToastrModule, NbWindowModule, NbSearchModule, NbAlertModule,
  NbIconModule, NbSpinnerModule, NbProgressBarModule, NbBadgeModule, NbChatModule, NbCalendarModule,
  NbCalendarRangeModule,
} from '@nebular/theme';



import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import { StepperComponent } from './stepper/stepper.component';
import { AccordionComponent } from './accordion/accordion.component';
import { ListComponent } from './list/list.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorComponent } from './error/error.component';
import { ToastComponent } from './toast/toast.component';
import { SearchComponent } from './search/search.component';
import { AlertComponent } from './alert/alert.component';
import { Home2Component } from './home2/home2.component';
import { IconsComponent } from './icons/icons.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { ChatComponent } from './chat/chat.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsComponent,
    StepperComponent,
    AccordionComponent,
    ListComponent,
    SidebarComponent,
    TabsComponent,
    InputComponent,
    ButtonComponent,
    CheckboxComponent,
    RadioComponent,
    SelectComponent,
    ProfileComponent,
    ErrorComponent,
    ToastComponent,
    SearchComponent,
    AlertComponent,
    Home2Component,
    IconsComponent,
    SpinnerComponent,
    ChatComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NbStepperModule,
    NbAccordionModule,
    NbListModule,
    NbTabsetModule,
    NbActionsModule,
    NbInputModule,
    NbButtonModule,
    NbRadioModule,
    NbSelectModule,
    NbPopoverModule,
    NbContextMenuModule,
    NbTooltipModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    NbWindowModule.forRoot(),
    NbCheckboxModule,
    NbToggleModule,
    NbMenuModule,
    NbUserModule,
    NbSearchModule,
    NbAlertModule,
    NbIconModule,
    NbSpinnerModule,
    NbProgressBarModule,
    NbBadgeModule,
    NbChatModule,
    NbCalendarModule,
    NbCalendarRangeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
