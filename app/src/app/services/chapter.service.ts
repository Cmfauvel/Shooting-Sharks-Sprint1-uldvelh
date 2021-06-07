import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
chapters = [
  {
      id: 1,
      resume: "ommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      idBook: 0
  }
];
  constructor() { }
}
