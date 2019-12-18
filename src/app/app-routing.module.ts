import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'stepper', component: StepperComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'list', component: ListComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'input', component: InputComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'radio', component: RadioComponent },
  { path: 'select', component: SelectComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
