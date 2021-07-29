import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:8020/api";
  constructor(private http: HttpClient) { }

  create(object): Observable<any> {
    return this.http.post<any>(this.baseUrl + "/create", object)
  }

  modify(idUser, newValues): Observable<any> {
    return this.http.put<any>(this.baseUrl + "/" + idUser +"/update", newValues)
  }

  select(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/" + id)
  }

  selectAll(): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/users")
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id + "/delete")
  }
}