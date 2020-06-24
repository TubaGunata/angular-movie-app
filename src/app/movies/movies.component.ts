import { Component } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
    selector: 'movies', //<movies></movies>
    templateUrl: 'movies.component.html'
    // template: `
    //     <h2>{{"Title" + getTitle()}}</h2>
    //     <div> {{movie.id}} </div>
    //     <div> {{movie.name}} </div>
    // `
    //styleUrls:['movies.component.css']
})
export class MoviesComponent {
    title = 'Movie List';
    //movies = ['movie1','movie2','movie3','movie4'];
    movies: Movie[];
    selectedMovie: Movie;

    constructor(private movieService: MovieService) {

    }
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.getMovies();
    }
    onSelect(movie: Movie): void {
        this.selectedMovie = movie;
    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(movies => {
                this.movies = movies;
            });
    }
}