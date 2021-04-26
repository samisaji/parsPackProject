import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';

import {
  NgxLoadingComponent,
  ngxLoadingAnimationTypes
} from 'ngx-loading';
import {
  profilForm
} from './models/ProfileForm.model';
import {
  UserProfileService
} from './services/user-profile.services';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @ViewChild('ngxLoading', {
    static: false
  }) ngxLoadingComponent: NgxLoadingComponent | undefined;
  @ViewChild('customLoadingTemplate', {
    static: false
  }) customLoadingTemplate: TemplateRef < any > | undefined;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  public config = {
    animationType: ngxLoadingAnimationTypes.none,
    backdropBorderRadius: '3px'
  };

  profileForm = new profilForm()
  profileImg: string;
  Id: any;
  constructor(
    private userProfileService: UserProfileService,
    private route: ActivatedRoute, ) {}

  loadProfileData(): void {
    this.loading = true;
    this.userProfileService.getUserProfileInfo(this.Id).subscribe(res => {
      this.loading = false;
      this.profileForm = res;
    })
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params['id']) {
        this.loading = true;
        this.Id = params.id;
        this.loadProfileData();
      }

    });
  }

}
