import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'',
    loadComponent: () => import('./layout/admin/layout-admin/layout-admin.component'),

      children:[

      { path:'', loadComponent: ()  => import('./layout/admin/header/header.component')},
      { path:'',loadComponent: ()  => import('./layout/admin/layout-admin/layout-admin.component')},
      { path:'', loadComponent: ()  => import('./layout/admin/sidebar/sidebar.component')},

    ]
  },
  
];
