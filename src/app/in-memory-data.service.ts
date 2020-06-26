import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: "Star Wars", description: "Rise of skywalker", imageUrl: "starwars.jpg" },
      { id: 2, name: "Alien", description: "1978", imageUrl: "alien.png" },
      { id: 3, name: "Batman", description: "Dark Knight", imageUrl: "batman.jpg" },
      { id: 4, name: "Star Wars", description: "Rise of skywalker", imageUrl: "starwars.jpg" },
      { id: 5, name: "Alien", description: "1978", imageUrl: "alien.png" },
      { id: 6, name: "Batman", description: "Dark Knight", imageUrl: "batman.jpg" },
      { id: 7, name: "Star Wars", description: "Rise of skywalker", imageUrl: "starwars.jpg" },
      { id: 8, name: "Alien", description: "1978", imageUrl: "alien.png" },
      { id: 9, name: "Batman", description: "Dark Knight", imageUrl: "batman.jpg" }
    ];
    return {movies};
  }
  constructor() { }
}
