import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './admin/users/users.component';
import { TasksComponent } from './admin/tasks/tasks.component';
import { ViewProfileComponent } from './user/view-profile/view-profile.component';
import { AllTasksComponent } from './user/all-tasks/all-tasks.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'admin/users',
    component: UsersComponent,
  },
  {
    path: 'user/tasks',
    component: TasksComponent,
  },
  {
    path: 'user/view-profile',
    component: ViewProfileComponent,
  },
  {
    path: 'admin/all-tasks',
    component: AllTasksComponent,
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
