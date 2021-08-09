import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
idUser: number;
books: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    try {
      this.bookService.selectAll().subscribe((response) => {
        this.books = response;
        console.log(response)
      })
    }
    catch {
      console.log("__Error handled gracefully.")
    }
  }

}
