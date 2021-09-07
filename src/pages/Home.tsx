import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList';
import SearchBox from '../components/SearchBox';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home: React.FC = () => {

  const [movies, setMovies] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue: string) => {

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      console.log(responseJson.Search);
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);



  return (
    <IonPage>

      <IonHeader>
        <IonToolbar className="toolbar">
          <IonTitle >Movie time 🍿</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background" no-scroll >
        <IonHeader collapse="condense">
        </IonHeader>
   
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}  />

            <MovieList movies={movies} />
    
      </IonContent>

    </IonPage>
  );
};

export default Home;
