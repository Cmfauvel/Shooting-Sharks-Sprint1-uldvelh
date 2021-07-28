import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {
 
creators = [
  {
    id: 1,
    name: "Toto",
    nb_book: 1,
    books: [{
      title: "Livre 1"
    }]
  },
  {
    id: 2,
    name: "Tata",
    nb_book: 1,
    books: [{
      title: "Livre 2"
    }]
  },
  {
    id: 3,
    username: "Charles"
  },
]
baseUrl : string = "api/creators";
constructor(private http: HttpClient) { }

// create(object): Observable<any> {
//   return this.http.post<any>(this.baseUrl, object)
// }

// modify(newValues): Observable<any> {
//   return this.http.put<any>(this.baseUrl + "/update", newValues)
// }

select(id): Observable<any> {
  return this.http.get<any>(this.baseUrl + "/" + id)
}

selectAll(): Observable<any> {
  return this.http.get<any>(this.baseUrl)
}

// delete(id): Observable<any> {
//   return this.http.delete<any>(this.baseUrl + "/delete/" + id)
// }
}
