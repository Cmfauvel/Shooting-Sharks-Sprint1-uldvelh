import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heros = [
    {
      id: 1,
      name: "",
      competence: ""
    }
  ];
  baseUrl : string = "api/heroes";
  constructor(private http: HttpClient) { }

  create(object): Observable<any> {
    return this.http.post<any>(this.baseUrl + "/create", object)
  }

  modify(idHero, newValues): Observable<any> {
    return this.http.put<any>(this.baseUrl + "/" + idHero +"/update", newValues)
  }

  select(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/" + id)
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/" + id + "/delete")
  }
}
