import './styles/MovieList.css';

interface ContainerProps { movies: Array<any>; }

const MovieList: React.FC<ContainerProps> = (props) => {
  return (
    <div className="container">

      {props.movies.map((movie, index) => (

        <div className='pelis  text-white mt-3'>
          <div className="card-img-top mt-3">
            <img src={movie.Poster} alt='movie'></img>
          </div>
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <p className="card-text">{movie.Year}</p>

          </div>
        </div>

      ))}

    </div>
  );
};

export default MovieList;
