import { Routes } from '@angular/router';
import { authGuard } from './core/auth/auth.guard';
import { noAuthGuard } from './core/auth/no-auth.guard';
import { adminGuard } from './core/auth/admin.guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/auth/login/login.component').then(
        (c) => c.LoginComponent
      ),
    canActivate: [noAuthGuard],
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/auth/register/register.component').then(
        (c) => c.RegisterComponent
      ),
    canActivate: [noAuthGuard],
  },
  {
    path: 'trains',
    loadComponent: () =>
      import('./pages/trains/trains.component').then((c) => c.TrainsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'bookings',
    loadComponent: () =>
      import('./pages/bookings/history/history.component').then(
        (c) => c.HistoryComponent
      ),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin/admin.routes').then((r) => r.ADMIN_ROUTES),
    canActivate: [adminGuard],
  },
  {
    path: '',
    redirectTo: 'trains',
    pathMatch: 'full',
  },
];
