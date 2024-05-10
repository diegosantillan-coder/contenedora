import { Routes } from '@angular/router';
import { TASK_ROUTES } from './modules/tasks/task.routes';

export const routes: Routes = [
  ...TASK_ROUTES,
  {
    path:'**',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
];
