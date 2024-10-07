import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileComponent } from './profile.component';
import { MessageService } from 'primeng/api';
import { ProfileService } from '../layout/service/profile.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ToastModule } from 'primeng/toast';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent],
      imports: [
        HttpClientTestingModule,
        ToastModule,
        ProgressSpinnerModule
      ],
      providers: [
        provideFirebaseApp(()=>initializeApp(environment._firebaseConfig)),
        provideAuth(()=>getAuth()),
        provideFirestore(()=>getFirestore()),
        MessageService, 
        ProfileService
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
