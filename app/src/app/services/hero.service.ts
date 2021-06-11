import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heros = [
    {
      id: 1,
      name: "",
      competence: ""
    }
  ];

  constructor() { }
}
