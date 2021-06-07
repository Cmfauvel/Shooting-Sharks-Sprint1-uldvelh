import { Component, OnInit } from '@angular/core';
import { CreatorService } from 'src/app/services/creator.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
creators;
  constructor(private creatorService: CreatorService) { }

  ngOnInit(): void {
    this.creators = this.creatorService.creators.slice();
  }

}
