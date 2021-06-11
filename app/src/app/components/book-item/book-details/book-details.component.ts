import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
content;
chapters;

  constructor(private activatedRoute: ActivatedRoute,
    private chapterService: ChapterService) { }

  ngOnInit(): void {
    const idChapter = this.activatedRoute.snapshot.params['idChapter'];
    this.chapters = this.chapterService.chapters.slice();
    this.content = this.chapters[idChapter - 1].text;
  }

}
