import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string) {
    const body = {
      email,
      password
    }
    return this.httpClient.post('https://test-node-jb.herokuapp.com/api/auth/login', body)
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
}
