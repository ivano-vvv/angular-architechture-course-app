import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'demo',
        loadChildren: () => import('./pages/demo').then((i) => i.DemoModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('./pages/auth').then((i) => i.AuthModule),
      },
      {
        path: 'static',
        loadChildren: () =>
          import('./pages/static').then((i) => i.StaticModule),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'static/welcome',
      },
    ],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'static/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
