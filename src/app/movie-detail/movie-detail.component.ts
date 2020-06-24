import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  //localhost:4200/detail/2
  @Input() movie: Movie;

  constructor(
    private MovieService: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getMovie();
  }
  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.MovieService.getMovie(id)
      .subscribe(movie => this.movie = movie);
  }
}