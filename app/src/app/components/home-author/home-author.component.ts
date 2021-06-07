import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home-author',
  templateUrl: './home-author.component.html',
  styleUrls: ['./home-author.component.scss']
})
export class HomeAuthorComponent implements OnInit {
  books;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.books.slice();
  }
}
