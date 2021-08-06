import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book';
import { Chapter } from '../models/chapter';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // httpOptions = {
  //   headers: new HttpHeaders({
  //     "Authorization": this.auth.checkAuthentication() || ''
  //   })
  // };
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

  baseUrl = `${environment.baseUrl}`;
  constructor(private httpClient: HttpClient) { }

  addBook(book: Book) {
    const body = {}
    return this.httpClient.post<Book>(`${this.baseUrl}/book/create`, book);
  }

  getBooks() {
    return this.httpClient.get<Array<Book>>(`${this.baseUrl}/book`);
  }

  getBookById(id: number) {
    return this.httpClient.get<Book>(`${this.baseUrl}/book/${id}`);
  }

  deleteBookById(id: number) {
    return this.httpClient.delete<Book>(`${this.baseUrl}/book/${id}`);
  }

  addChapterInBook(id: number, chapter: Chapter) {
    const body = {}
    return this.httpClient.post<Chapter>(`${this.baseUrl}/book/${id}/chapter`, chapter);
  }

  modify(newValues): Observable<any> {
    return this.httpClient.put<any>(this.baseUrl + "/book/" + newValues.id, newValues)
  }

 


  selectAll(): Observable<any> {
    return this.httpClient.get<Book>(this.baseUrl);
  }


  delete(id): Observable<any> {
    return this.httpClient.delete<any>(this.baseUrl + "/" + id + "/delete")
  }

}
