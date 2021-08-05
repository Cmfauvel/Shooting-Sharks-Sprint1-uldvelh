import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  
  constructor(private httpClient: HttpClient,
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(null);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(body): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/login', body)
      .pipe(
        map(
          (resp: any) => {
            this.currentUserSubject.next(resp);
            localStorage.setItem('TOKEN_APPLI', resp.accessToken);
            console.log('Token Save', resp.accessToken);
            return resp;
          }
        )
      );
  }

  register(user): Observable<User> {
    return this.httpClient.post<User>(this.baseUrl + '/register', user)
  }

  checkAuthentication(){
    const token =localStorage.getItem('TOKEN_APPLI')
    console.log(token)
    // return this.httpClient.get<User>(this.baseUrl + '/auth/checkAuthentication', token)
    if(token){
      return token;
    }
    
  }

  logout() {
    localStorage.removeItem('TOKEN_APPLI');
    this.router.navigate(['/login']);
  }

}
