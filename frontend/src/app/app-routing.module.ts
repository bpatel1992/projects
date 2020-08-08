import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserListComponent } from './component/user-list/user-list.component';


const routes: Routes = [
  { path: 'home', component: DashboardComponent },
  { path: 'user-detail', component: UserDetailsComponent },
  { path: 'user-list', component: UserListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }