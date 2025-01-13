import { TestBed } from '@angular/core/testing';

import { ProfileService } from './profile.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth, Auth, signInWithEmailAndPassword} from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import * as dataTesting from "../../../assets/data-testing.json";
import { AuthService } from 'src/app/home/service/auth.service';
describe('ProfileService', () => {
  let service: ProfileService;
  let authService: Auth;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideFirebaseApp(()=>initializeApp(environment._firebaseConfig)),
        provideAuth(()=>getAuth()),
        provideFirestore(()=>getFirestore()),
      ]
    });
    service = TestBed.inject(ProfileService);
    authService = TestBed.inject(Auth);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xdescribe('manage db', () => {
    signInWithEmailAndPassword(authService, dataTesting?.user?.email, dataTesting?.user?.password)
    .then(() => {
      it('add new profile', (done: DoneFn) => {
        let profile = dataTesting?.profiles[0];
        service.AddProfile(profile?.url, profile?.name)
        .then((data) => {
          expect(data).toBeDefined();
        })
      })
    })
  })
});
