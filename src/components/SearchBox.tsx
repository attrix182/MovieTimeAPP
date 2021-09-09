import { useEffect, useState } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonItem, IonLabel } from '@ionic/react';


import './styles/SearchBox.css';

interface ContainerProps { searchValue: string, setSearchValue: (value: string) => void }

const SearchBox: React.FC<ContainerProps> = (props) => {

  const handleChange = (e: any) => props.setSearchValue(e.target.value);



  return (
    <div>

      <IonItem>
        <IonInput placeholder="Search..." onIonChange={handleChange}></IonInput>
      </IonItem>


    </div>
  );


};

export default SearchBox;
