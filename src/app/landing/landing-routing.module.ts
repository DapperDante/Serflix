import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/landing-home/landing-home.module').then(m => m.LandingHomeModule),
    title: 'Serflix'
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule),
    title: 'Login | Serflix'
  },
  {
    path: 'register',
    loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule),
    title: 'Register | Serflix'
  },
	{
		path: 'reset-password',
		loadChildren: () => import('./components/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule),
		title: 'Forgot Password | Serflix'
	},
	{
		path: 'reset-password/:token',
		loadChildren: () => import('./components/reset-password/reset-password.module').then(m => m.ResetPasswordModule),
		title: 'Reset Password | Serflix'
	},
	{
		path: 'auth/:token',
		loadChildren: () => import('./components/auth-user/auth-user.module').then(m => m.AuthUserModule),
		title: 'Authenticate | Serflix'
	}
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LandingRoutingModule { }
