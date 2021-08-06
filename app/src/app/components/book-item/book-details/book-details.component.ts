import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Chapter } from 'src/app/models/chapter';
import { BookService } from 'src/app/services/book.service';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  id:number;
  book?:Book;
  chapters:Chapter[];
  

  constructor(private route: ActivatedRoute,
    private bookService: BookService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.bookService.getBookById(this.id).subscribe(
      (dataBook:Book) => {
        this.book = dataBook;
        this.chapters = dataBook.chapter;
        console.log(dataBook);
        console.log(this.chapters);
        
      }
    )
  }

  deleteBook(){
    this.bookService.deleteBookById(this.id).subscribe(
      (resp:any) => {
        console.log('livre supprimé');
        
      }
    )
  }

}
