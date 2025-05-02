import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthUserRoutingModule } from './auth-user-routing.module';
import { AuthUserComponent } from './auth-user.component';
import { BackgroundPostersModule } from '../background-posters/background-posters.module';


@NgModule({
  declarations: [AuthUserComponent],
  imports: [
    CommonModule,
    AuthUserRoutingModule,
		BackgroundPostersModule
  ]
})
export class AuthUserModule { }
