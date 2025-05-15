import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./layout/admin/layout-admin/layout-admin.component'),

      children:[
      { path: '', redirectTo: 'starred', pathMatch: 'full' },
      { path: 'starred', loadComponent: () => import ('./admin/starred/starred.component')},
      { path: 'recent', loadComponent: () => import ('./admin/recent/recent.component')},
      { path: 'saleslist', loadComponent: () => import ('./admin/saleslist/saleslist.component')},
      { path: 'goals', loadComponent: () => import ('./admin/goals/goals.component')},
      { path: 'dashboard', loadComponent: () => import ('./admin/dashboard/dashboard.component')}

    ]
  },
  
];
