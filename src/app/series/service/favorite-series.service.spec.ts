import { TestBed } from '@angular/core/testing';

import { FavoriteSeriesService } from './favorite-series.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

describe('FavoriteSeriesService', () => {
  let service: FavoriteSeriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideFirebaseApp(() => initializeApp(environment._firebaseConfig)),
        provideFirestore(() => getFirestore())
      ]
    });
    service = TestBed.inject(FavoriteSeriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
