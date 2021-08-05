import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-create-chapters',
  templateUrl: './create-chapters.component.html',
  styleUrls: ['./create-chapters.component.scss']
})
export class CreateChaptersComponent implements OnInit {

  chapterForm:FormGroup;
  chapters : any[];
  constructor( private chapterService : ChapterService, private router : Router ) {
    this.chapterForm = new FormGroup({})
   }

  ngOnInit(): void {
    this.initForm();
    this.chapters = this.chapterService.chapters.slice();
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
    console.log(this.chapterForm.value);
    this.chapterService.create(this.chapterForm.value);
  }

}
