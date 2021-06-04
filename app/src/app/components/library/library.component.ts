import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { Books } from 'src/app/models/mock-book';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

books = Books;

  constructor() { }

  ngOnInit(): void {
  }

}
