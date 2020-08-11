import React from "react";
import PorpTypes from "prop-types";
import "./Movie.css";

/*state가 필요하지 않아 함수 컴포넌트*/
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => (
            <li key={index} className="genres_genre">
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 100)}...</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PorpTypes.number.isRequired,
  year: PorpTypes.number.isRequired,
  title: PorpTypes.string.isRequired,
  summary: PorpTypes.string.isRequired,
  poster: PorpTypes.string.isRequired,
};

export default Movie;
