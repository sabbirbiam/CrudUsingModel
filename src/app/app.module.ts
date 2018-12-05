import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {FormsModule, ReactiveFormsModule } from '@angular/forms'


import { RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { HumanComponent } from './human/human.component';
import { HumanDetailsComponent } from './human-details/human-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HumanComponent,
    HumanDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule.forRoot([
      {path:'', component: HumanComponent},
      {path:'human-details/:Id', component: HumanDetailsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
