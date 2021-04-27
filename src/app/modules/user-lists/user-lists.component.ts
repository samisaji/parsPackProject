import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  NgxLoadingComponent,
  ngxLoadingAnimationTypes
} from 'ngx-loading';
import {
  UserLists
} from './models/UserLists.model';
import {
  UserListService
} from './services/user-lists.services';

@Component({
  selector: 'app-user-lists',
  templateUrl: './user-lists.component.html',
  styleUrls: ['./user-lists.component.scss']
})
export class UserListsComponent implements OnInit {
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
  userLists: UserLists[];
  paginatedUsersLists: UserLists[];
  pageSize: number = 10;
  page: number = 1;
  totalCount: number = 0;
  constructor(private userListService: UserListService, private router: Router, ) {}

  getUserList(): void {
    this.loading = true;
    this.userListService.getUserList().subscribe(res => {
      
      this.loading = false;
      this.userLists = res;

      this.paginatedUserLists(this.page - 1);
      this.totalCount = this.userLists.length
    })
  }
  paginatedUserLists(page: number): void {
    this.paginatedUsersLists = this.userLists ?.slice(page * 10, (page * 10) + 10)
  }
  updateQueryParams(): void {
    this.router.navigate([], {
      queryParams: {
        page: this.page
      }
    });
    this.paginatedUserLists(this.page - 1);
  }

  pageChange(page: number): void {
    
    this.page = +page;
    this.updateQueryParams();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  showDetail(id: any): void {

  }

  ngOnInit(): void {
    this.getUserList()
  }

}
