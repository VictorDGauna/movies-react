import { useEffect, useState } from "react";
import { useParams } from "react-router";
// import { Spinner } from "../components/Spinner";
import { get } from "../Utils/httpclient";
import styles from "./MovieDetails.module.css";
// console.log(movie)

export function MovieDetails() {
    const {movieId} = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        setIsLoading(true);

        get("/movie/" + movieId).then(data => {
            setIsLoading(false);
            setMovie(data);

        })
    }, [movieId]);
    if (isLoading) {
        return ('whait please');
    }
    if (!movie) {
        return null;
    }


    
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  console.log(imageUrl)

  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>{" "}
          {movie.genres.map((genre) => genre.name).join(", ")} 
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}
