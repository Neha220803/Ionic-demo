import { IonContent, IonPage, IonText } from '@ionic/react';


import LandingPageArea from '../components/LandingPage';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <LandingPageArea />
        <Footer />
      </IonContent>
    </IonPage>
  );
};

export default Home;