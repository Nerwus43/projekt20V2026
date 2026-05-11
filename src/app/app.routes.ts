import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { TaskManagementPageComponent } from './pages/task-management-page.component';
import { TeamManagementPageComponent } from './pages/team-management-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'zespol', component: TeamManagementPageComponent },
  { path: 'zadania', component: TaskManagementPageComponent },
  { path: '**', redirectTo: '' },
];
