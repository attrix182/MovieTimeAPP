import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import SearchBox from '../components/SearchBox';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="toolbar">
          <IonTitle >Movie time 🍿</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background" no-scroll >
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">a</IonTitle>
          </IonToolbar>
        </IonHeader>

        <SearchBox apellido="Perez" />

   
      </IonContent>
    </IonPage>
  );
};

export default Home;
