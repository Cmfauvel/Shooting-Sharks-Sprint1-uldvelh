import { Injectable } from '@angular/core';

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
  constructor() { }
}
