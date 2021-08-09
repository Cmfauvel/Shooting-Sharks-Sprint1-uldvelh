import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-maker',
  templateUrl: './hero-maker.component.html',
  styleUrls: ['./hero-maker.component.scss']
})
export class HeroMakerComponent implements OnInit {
  heros:any[];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heros = this.heroService.heros.slice();
    console.log(this.heros);
    
  }

  addHero(): void{
    this.heros.push({
      id: this.heros.length +1,
      name: '',
      competence:''
    })
  }

  deleteHero(): void{
    this.heros.pop();
  }

}
