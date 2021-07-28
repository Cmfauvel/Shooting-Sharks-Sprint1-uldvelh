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
  baseUrl: string = "https://test-node-jb.herokuapp.com/api"
  
  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.httpClient.post(this.baseUrl + '/auth/login', body)
      .pipe(
        map(
          (resp: any) => {
            localStorage.setItem('TOKEN_APPLI', resp.token);
            console.log('Token Save');
            return resp;
          }
        )
      );
  }

  register(user): Observable<any> {
    return this.httpClient.post(this.baseUrl + '/auth/register', user)
  }

  checkAuthentication(token) {
    token = localStorage.getItem('TOKEN_APPLI')
    return this.httpClient.get(this.baseUrl + '/auth/checkAuthentication', token)
  }

  logout() {
    localStorage.removeItem('TOKEN_APPLI')
  }
}