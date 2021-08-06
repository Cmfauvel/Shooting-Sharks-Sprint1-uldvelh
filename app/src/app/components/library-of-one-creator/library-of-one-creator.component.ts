import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { BookService } from 'src/app/services/book.service';
import { CreatorService } from 'src/app/services/creator.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-library-of-one-creator',
  templateUrl: './library-of-one-creator.component.html',
  styleUrls: ['./library-of-one-creator.component.scss']
})
export class LibraryOfOneCreatorComponent implements OnInit {
  books = [];
  creator;
  idCreator;
  currentUserId;

  constructor(private bookService: BookService,
    private userService: UserService,
     private activatedRoute: ActivatedRoute, private creatorService: CreatorService,
     private auth: AuthService) { }

  ngOnInit(): void {

    try {
      this.currentUserId = this.auth.getUserId();
      this.idCreator = this.activatedRoute.snapshot.params['idCreator'];
      console.log(this.idCreator)
        this.bookService.getBooks().subscribe((response) => {
          this.books = response;
          console.log(response)
        })
  
      this.userService.select(this.idCreator).subscribe((resp) => {
        this.creator = resp;
      })
      const creators = this.creatorService.creators.slice();
      this.creator = creators.find(creator => creator.id == this.idCreator);
    } catch {
      console.log("__Error handled gracefully.")
    }
    
  }

  
}
