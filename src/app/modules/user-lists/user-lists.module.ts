import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  UserListsRoutingModule
} from './user-lists-routing.module';
import {
  UserListsComponent
} from './user-lists.component';
import {
  NgxLoadingModule
} from 'ngx-loading';
import {
  FormsModule
} from '@angular/forms';
import {
  NzPaginationModule
} from 'ng-zorro-antd/pagination';




@NgModule({
  declarations: [UserListsComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserListsRoutingModule,
    NzPaginationModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [UserListsComponent]
})
export class UserListsModule {}
