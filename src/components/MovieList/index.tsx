<<<<<<< HEAD
import type { Movie } from '../../types';
import CardMovie from '../CardMovie'
import styles from './MovieList.module.css'

interface MovieListProps {
    movies: Movie[];
}

const MovieList = ({movies} : MovieListProps) => {
  return (
    <ul className={styles.lista}>
        {movies.map((movies) => (
            <CardMovie key={movies.id} {...movies}>
            </CardMovie>
        ))}
    </ul>
  )
}

export default MovieList
=======
import CardMovie from "../CardMovie";
import styles from "./MovieList.module.css";

type Categoria = "2D" | "3D";

type Censura = "Livre" | "10 anos" | "12 anos" | "14 anos" | "16 anos";

interface Movie {
  id: number;
  alt: string;
  src: string;
  titulo: string;
  categoria: Categoria;
  censura: Censura;
  genero: string;
  duracao: number;
}


const MovieList = ({ movies }: MovieListProps) => {
  return (
    <ul className={styles.lista}>
      {movies.map((movie) => (
        <CardMovie key={movie.id} {...movies}></CardMovie>
      ))}
    </ul>
  );
};

export default MovieList;
>>>>>>> a817f657bc46d202720e9f056cc6e3f5bbba88af
