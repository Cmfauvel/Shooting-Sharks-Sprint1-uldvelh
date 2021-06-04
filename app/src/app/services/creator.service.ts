import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {
  creators = [
    {
      id: 1,
      username: "Charles"
    },
    
  ]
  constructor() { }
}
