import { Component, OnInit } from '@angular/core';
import { Books } from 'src/app/models/mock-book';

@Component({
  selector: 'app-library-of-one-creator',
  templateUrl: './library-of-one-creator.component.html',
  styleUrls: ['./library-of-one-creator.component.scss']
})
export class LibraryOfOneCreatorComponent implements OnInit {
  books = Books;
  constructor() { }

  ngOnInit(): void {
  }

}
