import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "app/dashboard/dashboard.component";
import { UsersComponent } from "app/users/users.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'users',
    component: UsersComponent
  
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }