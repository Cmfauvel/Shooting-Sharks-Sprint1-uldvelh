import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
chapter;
chapters;
  constructor(private activatedRoute: ActivatedRoute,
    private chapterService: ChapterService) { }

  ngOnInit(): void {
    // const idChapter = this.activatedRoute.snapshot.params['id'];
    // const chapters = this.chapterService.chapters.slice();
    // this.chapter = chapters.find(chapter => chapter.id == idChapter);
    // console.log(chapters[1].text, chapters[1].idChapter)
    // this.chapters = chapters;
  }

}
