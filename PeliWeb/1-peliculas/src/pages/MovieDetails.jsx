import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";
import "../pages/MovieDetails.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [generos, setGeneros] = useState({});
  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setGeneros(data.genres[0]);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);
  return (
    <div className="detailsContainer">
      <div className="col movieImageContainer">
        <img src={imageUrl} alt={movie.title} className="movieImage" />
        <div className="col movieDetails">
  <div className="sectionContainer">
    <p className="sectionTitle">Título:</p>
    <p className="sectionContent">{movie.title}</p>
  </div>
  <div className="sectionContainer">
    <p className="sectionTitle">Género:</p>
    <p className="sectionContent">{generos.name}</p>
  </div>
  <div className="sectionContainer">
    <p className="sectionTitle">Descripción:</p>
    <p className="sectionContent">{movie.overview}</p>
  </div>
</div>
        <div className="buttonContainer">
          <div className="centeredButton">
            <Link to="/" className="homeButton">
              HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
