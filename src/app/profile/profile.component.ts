import { Component, inject } from '@angular/core';
import { ProfileService } from '../layout/service/profile.service';
import { Profile, RickAndMortyCharacters } from '../layout/api/account';
import { map, Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: ``
})
export class ProfileComponent {
  private _profile = inject(ProfileService);
  profile$!: Observable<any>;
  photos$!: Observable<RickAndMortyCharacters>;
  dataChartFavorite: any;
  dataChartOptions: any;
  selectPhotoProfile: boolean = false;
  constructor(private message: MessageService){}
  ngOnInit(){
    
    // this.profile$ = this._profile.getInfoProfile()
  }
  ViewPhotosForChange(){
    this.selectPhotoProfile = true;
    this.photos$ = this._profile.getAllPhotosForProfile();
  }
  ChangePhotoProfile(image: string){
    /* this._profile.UpdateImageOfProfile(image).then(()=>{
      this.message.add({severity: 'success', detail: 'Update image of profile'});
      this.selectPhotoProfile = false;
    }) */
  }
}
