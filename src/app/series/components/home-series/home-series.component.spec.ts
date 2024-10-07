import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeSeriesComponent } from './home-series.component';
import { MessageService } from 'primeng/api';
import { ItemSeriesService } from '../../service/item-series.service';
import { FavoriteSeriesService } from '../../service/favorite-series.service';
import { provideHttpClient } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from '@firebase/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { TabMenuModule } from 'primeng/tabmenu';
import { RouterTestingModule } from '@angular/router/testing';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

describe('HomeSeriesComponent', () => {
  let component: HomeSeriesComponent;
  let fixture: ComponentFixture<HomeSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeSeriesComponent],
      imports: [
        HttpClientTestingModule,
        ToastModule,
        TabMenuModule,
        RouterTestingModule,
        PaginatorModule,
        ProgressSpinnerModule
      ],
      providers: [
        provideFirebaseApp(()=>initializeApp(environment._firebaseConfig)),
        provideAuth(()=>getAuth()),
        provideFirestore(()=>getFirestore()),
        MessageService, 
        ItemSeriesService, 
        FavoriteSeriesService
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
