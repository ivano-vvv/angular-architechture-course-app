import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login').then((i) => i.LoginRoutingModule),
  },
  {
    path: 'registration',
    loadChildren: () =>
      import('./registration').then((i) => i.RegistrationRoutingModule),
  },
  {
    path: 'email-confirm',
    loadChildren: () =>
      import('./email-confirm').then((i) => i.EmailConfirmModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
