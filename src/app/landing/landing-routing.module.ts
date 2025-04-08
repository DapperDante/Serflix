import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    title: 'Serflix'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login | Serflix'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register | Serflix'
  },
	{
		path: 'reset-password',
		component: ForgotPasswordComponent,
		title: 'Forgot Password | Serflix'
	},
	{
		path: 'reset-password/:token',
		component: ResetPasswordComponent,
		title: 'Reset Password | Serflix'
	}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class LandingRoutingModule { }
