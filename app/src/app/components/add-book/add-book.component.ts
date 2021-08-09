import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  currentUserId: number;
  bookForm?:FormGroup;
  bookList?: Book[];

  constructor(private bookService: BookService, private router : Router,
    private auth: AuthService) {
    this.bookForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.initForm();
    this.currentUserId = this.auth.getUserId();
    this.bookService.getBooks().subscribe(
      (books:Array<Book>) => {
        this.bookList = books;
        console.log(this.bookList); 
      }
    )
  }

  initForm(): void{
    this.bookForm = new FormGroup ({
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    })

  }

  OnSubmit(): void{

    try {
      const book = {
        title: this.bookForm.value.title,
        type: this.bookForm.value.type,
        user_id: this.currentUserId
      }

      this.bookService.addBook(book).subscribe(
        (resp: any) => {
          this.bookService.getBooks().subscribe(
            (books:Array<Book>) => {
              this.bookList = books;   
              this.router.navigate([`/book/${resp.id}`]);               
            }
          )
        },
        (error: any) => {
          console.log('error while');
        }
      )

    } catch {
      console.log("__Error handled gracefully.")
    }
    
  }
  
}
