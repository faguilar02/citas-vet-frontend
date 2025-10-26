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
        path: 'login',
        loadComponent: () =>
          import('./auth/pages/login-page/login-page.component'),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./auth/pages/register-page/register-page.component'),
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
