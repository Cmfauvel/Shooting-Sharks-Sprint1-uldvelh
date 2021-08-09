import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
users: User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    try {
      this.userService.selectAll().subscribe((resp) => {
        this.users = resp;
      })
    } catch {
      console.log("__Error handled gracefully.")
    }

  }

}
