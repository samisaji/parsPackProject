import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  UserProfileRoutingModule
} from './user-profile-routing.module';
import {
  UserProfileComponent
} from './user-profile.component';
import {
  NgxLoadingModule
} from 'ngx-loading';
import {
  FormsModule
} from '@angular/forms';
import {
  NzButtonModule
} from 'ng-zorro-antd/button';
import {
  NzCarouselModule
} from 'ng-zorro-antd/carousel';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserProfileRoutingModule,
    NzButtonModule,
    NzCarouselModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [UserProfileComponent]
})
export class UserProfileModule {}
