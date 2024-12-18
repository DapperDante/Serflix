import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { LandingComponent } from './components/landing/landing.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthService } from './service/auth.service';
import { HomeAccessComponent } from './components/home-access/home-access.component';
import { CarouselModule } from 'primeng/carousel';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SkeletonModule } from 'primeng/skeleton';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
@NgModule({
  declarations: [
    LandingComponent, 
    LoginComponent, 
    RegisterComponent, 
    HomeAccessComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ButtonModule,
    RippleModule,
    InputTextModule,
    AppConfigModule,
    CheckboxModule,
    RouterModule,
    PasswordModule,
    DividerModule,
    DockModule,
    ReactiveFormsModule,
    ToastModule,
    FloatLabelModule,
    CarouselModule,
    ProgressSpinnerModule,
    SkeletonModule,
    NgOptimizedImage,
    SharedComponentsModule
  ],
  providers: [
    MessageService,
    AuthService
  ]
})
export class HomeModule { }
