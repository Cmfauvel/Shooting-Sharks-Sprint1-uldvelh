import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Book } from 'src/app/models/book';
=======
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
>>>>>>> 44a68a4ce45b9fbe71eeb2c5157483b7dea0ba8d
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  currentUser: User;
  bookForm?:FormGroup;
  bookList?: Book[];

  constructor(private bookService: BookService, 
    private router : Router, 
    private auth: AuthService) {
    this.bookForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.initForm();
<<<<<<< HEAD
    this.bookService.getBooks().subscribe(
      (books:Array<Book>) => {
        this.bookList = books;
        console.log(this.bookList); 
      }
    )
=======
    this.auth.currentUser.subscribe((resp) => {
      console.log(resp)
      this.currentUser = resp;
    })
>>>>>>> 44a68a4ce45b9fbe71eeb2c5157483b7dea0ba8d
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
      user_id: this.currentUser.id
    }
    console.log(this.bookForm.value);
<<<<<<< HEAD
    const book = {
      
    }
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
=======
    this.bookService.create(book).subscribe((response) => {
      console.log(response)
    })
>>>>>>> 44a68a4ce45b9fbe71eeb2c5157483b7dea0ba8d
  }
  
}
