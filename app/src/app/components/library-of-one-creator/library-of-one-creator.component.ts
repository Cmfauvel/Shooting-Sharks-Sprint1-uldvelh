import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-library-of-one-creator',
  templateUrl: './library-of-one-creator.component.html',
  styleUrls: ['./library-of-one-creator.component.scss']
})
export class LibraryOfOneCreatorComponent implements OnInit {
  books = [];
  creator: User;
  idCreator: number;
  currentUserId: number;
  creators: User[];

  constructor(private bookService: BookService,
    private userService: UserService,
     private activatedRoute: ActivatedRoute, 
     private auth: AuthService) { }

  ngOnInit(): void {
    try {
      this.currentUserId = this.auth.getUserId();
      this.idCreator = this.activatedRoute.snapshot.params['idCreator'];
        this.bookService.getBooks().subscribe((response) => {
          this.books = response;
        })
  
      this.userService.select(this.idCreator).subscribe((resp) => {
        this.creator = resp;
      })
      this.userService.selectAll().subscribe((resp) => {
        this.creators = resp;
      })
      this.creator = this.creators.find(creator => creator.id == this.idCreator);
    } catch {
      console.log("__Error handled gracefully.")
    }
    
  }

  
}
