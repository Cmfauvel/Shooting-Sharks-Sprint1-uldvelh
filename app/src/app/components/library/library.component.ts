import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
idUser;
books;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.books.slice();
    this.bookService.selectAll(this.idUser).subscribe((response) => {
      this.books = response;
    })
  }

}
