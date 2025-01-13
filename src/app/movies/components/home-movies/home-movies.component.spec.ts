import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMoviesComponent } from './home-movies.component';
import { MessageService } from 'primeng/api';
import { FavoriteMoviesService } from '../../service/favorite-movies.service';
import { ItemMoviesService } from '../../service/item-movies.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { TabMenuModule } from 'primeng/tabmenu';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastModule } from 'primeng/toast';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

describe('HomeMoviesComponent', () => {
  let component: HomeMoviesComponent;
  let fixture: ComponentFixture<HomeMoviesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeMoviesComponent
      ],
      imports: [
        HttpClientTestingModule,
        TabMenuModule,
        RouterTestingModule,
        ToastModule,
        PaginatorModule,
        ProgressSpinnerModule
      ],
      providers: [
        provideFirebaseApp(()=>initializeApp(environment._firebaseConfig)),
        provideAuth(()=>getAuth()),
        provideFirestore(()=>getFirestore()),
        MessageService, 
        FavoriteMoviesService, 
        ItemMoviesService
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
