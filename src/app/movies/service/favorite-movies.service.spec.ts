import { TestBed } from '@angular/core/testing';
import { FavoriteMoviesService } from './favorite-movies.service';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import * as dataTesting from '../../../assets/data-testing.json';
describe('FavoriteMoviesService', () => {
  let service: FavoriteMoviesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideFirebaseApp(() => initializeApp(environment._firebaseConfig)),
        provideFirestore(() => getFirestore())
      ]
    });
    service = TestBed.inject(FavoriteMoviesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('manage db', () => {

    it('add one demo movie', (done: DoneFn) => {
      service.AddMovieFavorite(dataTesting?.demoItem?.idItem, dataTesting?.demoItem?.title, dataTesting?.demoItem?.poster_path, dataTesting?.demoItem?.genres, dataTesting?.demoItem?.idProfile)
      .then((data) => {
        expect(data).toBeDefined();
        done();
      })
    });
  });
});