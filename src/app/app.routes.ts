import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'app',
    loadComponent: () => import('./features/layouts/pages/root/root').then((m) => m.RootLayout),
    children: [],
  },
];
