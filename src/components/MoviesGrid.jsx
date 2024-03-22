import { useEffect, useState } from "react";
import { get } from "../Utils/httpclient";
import movies from "./movies.json";
import { MoviesCard } from "./MoviesCard";
import styles from "./MoviesGrid.module.css"

export function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  useEffect(() =>{
    get("/discover/movie")
    .then((data) => {
      setMovies(data.results);
    });
  }, []);
  
  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MoviesCard key={movie.id} movie={movie} /> ))}
    </ul>
  );
}
