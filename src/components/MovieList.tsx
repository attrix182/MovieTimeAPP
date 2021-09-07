import './styles/MovieList.css';

interface ContainerProps { movies: Array<any>; }

const MovieList: React.FC<ContainerProps> = (props) => {
  return (
    <div className="container">

     {props.movies.map((movie, index) => (
			
      <div className='image-container d-flex justify-content-center mt-3'>
        <img  src= {movie.Poster} alt='movie'></img>	
           
      </div>

    ))}

    </div>
  );
};

export default MovieList;
