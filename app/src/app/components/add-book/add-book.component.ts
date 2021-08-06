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
  // currentUser: User;
  currentUserId;
  bookForm?:FormGroup;
  bookList?: Book[];

  constructor(private bookService: BookService, private router : Router,
    private auth: AuthService) {
    this.bookForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.initForm();
    this.currentUserId = this.auth.getUserId();
    // this.auth.currentUser.subscribe((resp) => {
    //   console.log(resp)
    //   this.currentUser = resp;
    // })
    this.bookService.getBooks().subscribe(
      (books:Array<Book>) => {
        this.bookList = books;
        console.log(this.bookList); 
      }
    )
  }

  initForm(){
    this.bookForm = new FormGroup ({
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    })

  }

  OnSubmit(){
    const book = {
      title: this.bookForm.value.title,
      type: this.bookForm.value.type,
      user_id: this.currentUserId
    }
    console.log(this.bookForm.value);
    this.bookService.addBook(this.bookForm.value).subscribe(
      (resp: any) => {
        console.log("Connection succeed", resp);
        this.bookService.getBooks().subscribe(
          (books:Array<Book>) => {
            this.bookList = books;  
            console.log(this.bookList);
              
          }
        )
      },
      (error: any) => {
        console.log('error while');
      }
    )
  }
  
}
