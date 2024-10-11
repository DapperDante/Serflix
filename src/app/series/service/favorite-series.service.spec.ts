import { TestBed } from '@angular/core/testing';

import { FavoriteSeriesService } from './favorite-series.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import * as dataTesting from "../../../assets/data-testing.json";
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

  describe('manage db', () => {

    it('add one demo serie', (done: DoneFn) => {
      service.AddSerieFavorite(dataTesting?.demoItem?.idItem, dataTesting?.demoItem?.title, dataTesting?.demoItem?.poster_path, dataTesting?.demoItem?.genres, dataTesting?.demoItem?.idProfile)
      .then((data) => {
        expect(data).toBeDefined();
        done();
      })
    });

  });

});
