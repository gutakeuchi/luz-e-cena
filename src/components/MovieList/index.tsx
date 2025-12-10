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
