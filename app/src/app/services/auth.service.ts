import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  baseUrl: string = "http://localhost:8020/api/auth"
  
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(body): Observable<any> {
    // const body = {
    //   email,
    //   password
    // }
    return this.httpClient.post<User>(this.baseUrl + '/login', body)
      .pipe(
        map(
          (resp: any) => {
            localStorage.setItem('TOKEN_APPLI', resp.accessToken);
            console.log('Token Save', resp.accessToken);
            return resp;
          }
        )
      );
  }

  register(user): Observable<any> {
    return this.httpClient.post<User>(this.baseUrl + '/register', user)
  }

  checkAuthentication(token) {
    token = localStorage.getItem('TOKEN_APPLI')
    return this.httpClient.get<User>(this.baseUrl + '/auth/checkAuthentication', token)
  }

  logout() {
    localStorage.removeItem('TOKEN_APPLI')
  }
}
