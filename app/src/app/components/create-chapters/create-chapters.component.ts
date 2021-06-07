import { Component, OnInit } from '@angular/core';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-create-chapters',
  templateUrl: './create-chapters.component.html',
  styleUrls: ['./create-chapters.component.scss']
})
export class CreateChaptersComponent implements OnInit {

  chapters : any[];
  constructor( private chapterService : ChapterService ) {
   }

  ngOnInit(): void {

    this.chapters = this.chapterService.chapters.slice();
    console.log(this.chapters);
    
  }

  addChapters() {
    this.chapters.push({
      id: this.chapters.length +1,
      resume:'',
      idBook: 0
    })
  }

}
