import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  bookForm?:FormGroup;

  constructor(private bookService: BookService, private router : Router) {
    this.bookForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.bookForm = new FormGroup ({
      title: new FormControl('', Validators.required),
      author: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    })
  }

  OnSubmit(){
    console.log(this.bookForm.value);
    this.bookService.create(this.bookForm.value);
  }
  
}
