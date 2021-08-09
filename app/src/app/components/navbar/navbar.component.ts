import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
isPlayerMode: boolean;
currentUserId: number;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    try {
      this.currentUserId = this.auth.getUserId();
    } catch {
      console.log("__Error handled gracefully.")
    }
  }

  switchMode(): boolean {
   return this.isPlayerMode = !this.isPlayerMode;
  }

  logout(): void {
    this.auth.logout();
  }

}
