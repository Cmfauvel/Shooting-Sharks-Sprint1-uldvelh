import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-modify-book',
  templateUrl: './modify-book.component.html',
  styleUrls: ['./modify-book.component.scss']
})
export class ModifyBookComponent implements OnInit {
  currentUserId;
  bookForm?:FormGroup;
  bookId;

  constructor(private bookService: BookService, private router : Router,
    private auth: AuthService, private route: ActivatedRoute) {
    this.bookForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.initForm();
    this.currentUserId = this.auth.getUserId();
    this.bookId = this.route.snapshot.params.id;
  }

  initForm(){
    this.bookForm = new FormGroup ({
      title: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    })

  }

  OnSubmit(){

    try {
      const book = {
        id: this.bookId,
        title: this.bookForm.value.title,
        type: this.bookForm.value.type
      }

    this.bookService.modify(book).subscribe((resp) => {
      console.log(resp)
      this.router.navigate([`/book/${this.bookId}`]); 
    })

    } catch {
      console.log("__Error handled gracefully.")
    }
    
  }

}
