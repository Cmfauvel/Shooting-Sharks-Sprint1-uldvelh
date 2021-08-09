import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Chapter } from 'src/app/models/chapter';
import { BookService } from 'src/app/services/book.service';
import { ConfirmComponent } from 'src/app/_helpers/confirm/confirm.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  id: number;
  book?: Book;
  chapters: Chapter[];
  @Inject(MAT_DIALOG_DATA) public data: any;

  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    try {
      this.bookService.getBookById(this.id).subscribe(
        (dataBook: Book) => {
          this.book = dataBook;
          this.chapters = dataBook.chapter;
        }
      )
    } catch {
      console.log("__Error handled gracefully.")
    }

  }

  deleteBook(): void {
    try {
      const dialogRef = this.matDialog.open(ConfirmComponent, {
        width: '350px',
        data: "Voulez-vous supprimer ce livre ?"
      });
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.bookService.deleteBookById(this.id).subscribe(
            (resp: any) => {
              console.log('livre supprimé');
            })
        }
      })
    } catch {
      console.log("__Error handled gracefully.")
    }
  }

}
