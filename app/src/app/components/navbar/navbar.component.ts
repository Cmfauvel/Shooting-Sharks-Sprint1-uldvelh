import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isPlayerMode: boolean;
currentUserId;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  
   this.currentUserId = this.auth.getUserId();
  }

  switchMode() {
    this.isPlayerMode = !this.isPlayerMode;
    console.log(this.isPlayerMode)
  }

  logout() {
    this.auth.logout();
  }

}
