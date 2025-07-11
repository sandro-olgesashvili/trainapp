import { Routes } from '@angular/router';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./view-bookings/view-bookings.component').then(
        (c) => c.ViewBookingsComponent
      ),
  },
  {
    path: 'add-train',
    loadComponent: () =>
      import('./add-train/add-train.component').then(
        (c) => c.AddTrainComponent
      ),
  },
];
