import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { AuthService } from '../../service/auth.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
//Be careful when import, because it could problem when run test
import { provideAuth, getAuth } from '@angular/fire/auth';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
describe('Login', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>
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
});
