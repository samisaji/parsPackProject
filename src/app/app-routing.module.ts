import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';

const routes: Routes = [{
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'user-lists',
    loadChildren: () => import('./modules/user-lists/user-lists.module').then(m => m.UserListsModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./modules/user-profile/user-profile.module').then(m => m.UserProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
