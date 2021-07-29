import { Component, OnInit } from '@angular/core';
import { CreatorService } from 'src/app/services/creator.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
creators;
users;
  constructor(private creatorService: CreatorService, private userService: UserService) { }

  ngOnInit(): void {
    this.creators = this.creatorService.creators.slice();
    this.userService.selectAll().subscribe((response) => {
      this.users = response;
    })


  }

}
