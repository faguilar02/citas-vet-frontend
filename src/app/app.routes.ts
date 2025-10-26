import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./public/layout/public-page.component'),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./public/pages/landing-page/landing-page.component'),
      },

      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.routes'),
      },

      {
        path: '**',
        redirectTo: '',
      },
    ],
  },

  {
    path: '**',
    redirectTo: '',
  },
];
