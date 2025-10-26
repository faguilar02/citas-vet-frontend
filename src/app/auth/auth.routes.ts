import { Routes } from '@angular/router';
import { LayoutPage } from './pages/layout-page/layout-page.component';

export const authRoutes: Routes = [
  {
    path: '',
    component: LayoutPage,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./pages/login-page/login-page.component'),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./pages/register-page/register-page.component'),
      },

      {
        path: '**',
        redirectTo: 'login',
      },
    ],
  },
];
export default authRoutes;
