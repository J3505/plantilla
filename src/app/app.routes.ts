import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./layout/admin/layout-admin/layout-admin.component'),

      children:[
        { path: '', redirectTo: 'starred', pathMatch: 'full' },
      { path: 'starred', loadComponent: () => import ('./admin/starred/starred.component')},
      { path: 'recent', loadComponent: () => import ('./admin/recent/recent.component')},

      

    ]
  },
  
];
