import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  currentUser: User;
  bookForm?:FormGroup;

  constructor(private bookService: BookService, 
    private router : Router, 
    private auth: AuthService) {
    this.bookForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.initForm();
    this.auth.currentUser.subscribe((resp) => {
      console.log(resp)
      this.currentUser = resp;
    })
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
    this.bookService.create(book).subscribe((response) => {
      console.log(response)
    })
  }
  
}
