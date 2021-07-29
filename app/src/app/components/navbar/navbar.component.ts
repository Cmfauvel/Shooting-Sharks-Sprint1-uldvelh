import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isPlayerMode: boolean;
currentUser;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.currentUser = this.auth.currentUser;
  }

  switchMode() {
    this.isPlayerMode = !this.isPlayerMode;
    console.log(this.isPlayerMode)
  }

  logout() {
    this.auth.logout();
  }

}
