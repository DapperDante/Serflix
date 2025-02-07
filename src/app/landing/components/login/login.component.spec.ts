import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../../service/auth.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
//Be careful when import, because it could problem when run test
import { provideAuth, getAuth } from '@angular/fire/auth';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import * as dataTesting from "../../../../assets/data-testing.json";
describe('Login', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          ToastModule
        ],
        providers: [
            //For all config about @angular/fire with authentication service
            provideFirebaseApp(()=>initializeApp(environment._firebaseConfig)),
            provideAuth(()=>getAuth()),
            AuthService,
            MessageService
        ]
    });
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('contain attribute enough for complete the form', ()=>{
    expect(component.loginForm.contains('emailUser')).toBeTruthy();
    expect(component.loginForm.contains('passwordUser')).toBeTruthy();
  });

  it('Login with email and password', ()=>{
    component.loginForm.get('emailUser')?.setValue(dataTesting?.user?.email);
    component.loginForm.get('passwordUser')?.setValue(dataTesting?.user?.password)
    expect(component.Login()).toBeTruthy();
  });

  it('Login with email or password but without once both', ()=>{
    component.loginForm.get('emailUser')?.setValue(dataTesting?.user?.email);
    expect(component.Login()).toBeFalsy();
    component.loginForm.get('emailUser')?.setValue('');
    component.loginForm.get('passwordUser')?.setValue(dataTesting?.user?.password);
    expect(component.Login()).toBeFalsy();
  });
});
