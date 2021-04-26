import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Observable
} from 'rxjs';
import {
  environment
} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private baseUrl: string = environment.BaseUrl;
  constructor(private http: HttpClient) {}

  getUserList(): Observable < any > {
    return this.http.get < any > (`${this.baseUrl}/frontend_challenge/?o=list`)
  }

}
