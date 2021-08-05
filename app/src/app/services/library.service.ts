import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  baseUrl : string = "http://localhost:8020/api/library";
  constructor(private http: HttpClient) { }

  // create(object): Observable<any> {
  //   return this.http.post<any>(this.baseUrl + "/create", object)
  // }
}
