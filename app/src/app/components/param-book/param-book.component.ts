import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { BookService } from 'src/app/services/book.service';
import { ChapterService } from 'src/app/services/chapter.service';

@Component({
  selector: 'app-param-book',
  templateUrl: './param-book.component.html',
  styleUrls: ['./param-book.component.scss']
})
export class ParamBookComponent implements OnInit {
  chapters;
  book;
  closeResult = '';

  constructor(private modalService: NgbModal,
    private activatedRoute: ActivatedRoute,
    private chapterService: ChapterService,
    private bookService: BookService) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  ngOnInit(): void {
    const idBook = this.activatedRoute.snapshot.params['id'];
    this.chapters = this.chapterService.chapters.slice();
    // this.chapterService.selectAll(idBook).subscribe((response) => {
    //   this.chapters = response;
    // })
    const books = this.bookService.books.slice();
    this.book = books.find(book => book.id == idBook);
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  getColor(chapter){
    const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    const a = chapter.before;
    const b = chapter.after;
    const x = []

    if(equals(a,x) && equals(b,x)){ // chapitre innaccessible et sans suite
      return "red"
    } else if(equals(a,x) == false && equals(b,x)) {  // chapitre accessible, sans suite
      return "orange"
    } else if(equals(a,x) && equals(b,x) == false){  // chapitre inaccessible, avec une suite
      return "yellow"
    } else if(equals(a,x) == false && equals(b,x) == false){ // chapitre accessible, avec une suite
      return "green"
    } else {console.log("this was not suppose to append")}
  }
}
