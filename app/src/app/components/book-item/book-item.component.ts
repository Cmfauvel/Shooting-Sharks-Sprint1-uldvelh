import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})

export class BookItemComponent implements OnInit {
chapters;
book;

  constructor(private chapterService: ChapterService,
    private activatedRoute: ActivatedRoute,
    private bookService: BookService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.chapters = this.chapterService.chapters.slice();
    const books = this.bookService.books.slice();
    this.book = books.find(book => book.id == id);
  }

}
