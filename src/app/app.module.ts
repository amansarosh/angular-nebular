import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule, NbLayoutModule, NbCardModule, NbStepperModule, NbAccordionModule, NbListModule,
  NbTabsetModule, NbActionsModule, NbInputModule, NbButtonModule, NbRadioModule, NbSelectModule,
  NbPopoverModule, NbContextMenuModule, NbTooltipModule, NbSidebarModule, NbCheckboxModule,
  NbToggleModule
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
    NbCheckboxModule,
    NbToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
