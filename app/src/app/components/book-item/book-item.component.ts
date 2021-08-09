import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Chapter } from 'src/app/models/chapter';
import { BookService } from 'src/app/services/book.service';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})

export class BookItemComponent implements OnInit {
chapters: Chapter[];
book: Book;
books: Book[];

  constructor(private chapterService: ChapterService,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService) { }

  ngOnInit(): void {
    const idBook = this.activatedRoute.snapshot.params['id'];
    try {

      this.chapterService.selectAll(idBook).subscribe((response) => {
        this.chapters = response;
      })
      this.bookService.selectAll().subscribe((resp) => {
        this.books = resp;
      })
      this.book = this.books.find(book => book.id == idBook);
    
    } catch {
      console.log("__Error handled gracefully.")
    }
  }
    

}
