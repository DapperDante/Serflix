import { Component, inject } from '@angular/core';
import { ProfileService } from './service/profile.service';
import { Profile, RickAndMortyCharacters } from './api/account';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-selectprofile',
  templateUrl: './selectprofile.component.html',
  styles: `
    .select-profile:hover{
      transition-duration: 200ms;
      transform: scale(1.1);
      box-shadow: 0px 9px 46px 8px rgba(0, 0, 0, 0.12), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 11px 15px rgba(0, 0, 0, 0.2);
    }
  `
})
export class SelectprofileComponent {
  private _profile = inject(ProfileService);
  profiles$!: Observable<Profile[]>;
  photos$!: Observable<RickAndMortyCharacters>;
  //Control view panel of edit
  addProfile: boolean = false;
  selectPhotoProfile: boolean = false;
  //Variables for new profile
  urlProfileSelected!: string;
  nameProfileSelected!: string;
  constructor(private router: Router, private confirmationService: ConfirmationService){}
  ngOnInit(){
    this.profiles$ = this._profile.profiles$;
  }
  SelectProfile(id: number){
    this.router.navigate(['home'], {state: {idProfile: id}});
  }
  ViewPhotosForProfile(){
    this.selectPhotoProfile = true;
    //Avoid repeat request when get all of view photos
    if(this.photos$)
      return;
    this.photos$ = this._profile.getAllPhotosForProfile();
  }
  //It's for change the photo when you choose one of them for new profile
  ChangePhotoProfile(url: string){
    this.urlProfileSelected = url;
    this.selectPhotoProfile = false;
  }
  CreateProfile(){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to created?',
      header: 'Confirmation',
      icon: 'pi pi-info-circle',
      acceptIcon:"none",
      rejectIcon:"none",
      rejectButtonStyleClass:"p-button-text",
      accept: () => {
          this.CreatingProfile();
        }
      });
    }
  //This send all info to database
  private CreatingProfile(){
    this._profile.AddProfile(this.urlProfileSelected, this.nameProfileSelected).then((idProfile)=>{
      console.log(idProfile);
      this.router.navigate(['home'], {state: {idProfile: idProfile}});
    })
  }
}
