import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-library-of-one-creator',
  templateUrl: './library-of-one-creator.component.html',
  styleUrls: ['./library-of-one-creator.component.scss']
})
export class LibraryOfOneCreatorComponent implements OnInit {
  books;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.books.slice();
  }
}
