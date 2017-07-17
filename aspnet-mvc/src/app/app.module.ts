import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AppComponent } from "app/app.component";

import { AppRoutingModule } from "app/app.routing";
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
