import { Routes } from '@angular/router';
// import { roleGuard } from './guards/role.guard';

export const LAYOUT_ROUTES: Routes = [
  {
    path: '',
    // canActivate:[roleGuard],
    // data: { role: ['admin'] },
    loadComponent: () => import('./pages/root/root').then((m) => m.RootLayout),
    children: [

    ],
  },
];
