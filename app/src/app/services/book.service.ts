import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
books = [
  {
      id: 1,
      title: "Livre 1",
      nb_chapter: 18,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      creator: "Toto",
      type: "Convergent"
  },
  {
      id: 2,
      title: "Livre 2",
      nb_chapter: 5,
      resume: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      creator: "Tata",
      type: "Convergent"
  }
];

baseUrl : string = "";
  constructor(private http: HttpClient) { }

  create(object): Observable<any> {
    return this.http.post<any>(this.baseUrl, object)
  }

  modify(newValues): Observable<any> {
    return this.http.put<any>(this.baseUrl + "/update", newValues)
  }

  select(id): Observable<any> {
    return this.http.get<any>(this.baseUrl + "/" + id)
  }

  delete(id): Observable<any> {
    return this.http.delete<any>(this.baseUrl + "/delete/" + id)
  }
  
}
