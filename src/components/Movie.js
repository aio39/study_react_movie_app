import React from "react";
import PorpTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

/*state가 필요하지 않아 함수 컴포넌트*/
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <Link
      to={{
        pathname: `/movie/${id}`,
        state: {
          year,
          title,
          summary,
          poster,
          genres,
        },
      }}
    >
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
    </Link>
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
