import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { Chapter } from 'src/app/models/chapter';
import { BookService } from 'src/app/services/book.service';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-create-chapters',
  templateUrl: './create-chapters.component.html',
  styleUrls: ['./create-chapters.component.scss']
})
export class CreateChaptersComponent implements OnInit {

  chapterForm:FormGroup;
  chapter : Chapter;
  book:Book;
  constructor( private chapterService : ChapterService, private router : Router, private bookService: BookService, private route:ActivatedRoute ) {
    this.chapterForm = new FormGroup({})
   }

  ngOnInit(): void {
    this.initForm();
    //this.chapters = this.chapterService.chapters.slice();
    //console.log(this.chapters);
    
  }

  initForm(){
    this.chapterForm = new FormGroup ({
      title: new FormControl('', Validators.required),
      resume: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required)
    })
  }

  //addChapters() {
  //  this.chapters.push({
  //    id: this.chapters.length +1,
  //    resume:'',
  //    idBook: 0
  //  })
  //}

  OnSubmit(){
    this.chapter = this.chapterForm.value;
    const id: number = this.route.snapshot.params.id;
    this.bookService.addChapterInBook(id, this.chapter).subscribe(
      (resp : any) => {
        console.log(resp);
        
      }
    )
  }

}
