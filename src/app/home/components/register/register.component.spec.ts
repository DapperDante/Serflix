import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../service/auth.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ToastModule } from 'primeng/toast';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RippleModule } from 'primeng/ripple';
import { InputTextModule } from 'primeng/inputtext';
import { AppConfigModule } from 'src/app/layout/config/app.config.module';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterTestingModule } from '@angular/router/testing';
import * as dataTesting from '../../../../assets/data-testing.json'
describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        RouterTestingModule,
        ButtonModule,
        RippleModule,
        InputTextModule,
        AppConfigModule,
        CheckboxModule,
        PasswordModule,
        DividerModule,
        DockModule,
        ReactiveFormsModule,
        ToastModule,
        FloatLabelModule
      ],
      providers: [
        provideFirebaseApp(()=>initializeApp(environment._firebaseConfig)),
        provideAuth(()=>getAuth()),
        MessageService,
        AuthService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contain attribute enough for complete the form', ()=>{
    expect(component.registerForm.contains('nameUser')).toBeTruthy();
    expect(component.registerForm.contains('emailUser')).toBeTruthy();
    expect(component.registerForm.contains('passwordUser')).toBeTruthy();
  });

  it('Register with email and password', ()=>{
    component.registerForm.get('nameUser')?.setValue(dataTesting?.user?.nameUser);
    component.registerForm.get('emailUser')?.setValue(dataTesting?.user?.email);
    component.registerForm.get('passwordUser')?.setValue(dataTesting?.user?.password);
    expect(component.Register()).toBeTruthy();
  });

  it('Register with email or password but without once both', ()=>{
    component.registerForm.get('nameUser')?.setValue(dataTesting?.user?.nameUser);
    expect(component.Register()).toBeFalsy();
    component.registerForm.get('nameUser')?.setValue('');
    component.registerForm.get('emailUser')?.setValue(dataTesting?.user?.email);
    expect(component.Register()).toBeFalsy();
    component.registerForm.get('emailUser')?.setValue('');
    component.registerForm.get('passwordUser')?.setValue(dataTesting?.user?.password);
    expect(component.Register()).toBeFalsy();
  });
});
