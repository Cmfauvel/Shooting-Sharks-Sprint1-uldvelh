import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { CreatorService } from 'src/app/services/creator.service';

@Component({
  selector: 'app-library-of-one-creator',
  templateUrl: './library-of-one-creator.component.html',
  styleUrls: ['./library-of-one-creator.component.scss']
})
export class LibraryOfOneCreatorComponent implements OnInit {
  books;
  creator;
  idCreator;

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private creatorService: CreatorService) { }

  ngOnInit(): void {
    this.books = this.bookService.books.slice();
    this.idCreator = this.activatedRoute.snapshot.params['id'];
      this.bookService.selectBooksOfOneCreator(this.idCreator).subscribe((response) => {
        this.books = response
      })
    const creators = this.creatorService.creators.slice();
    this.creator = creators.find(creator => creator.id == this.idCreator);
  }

  
}
