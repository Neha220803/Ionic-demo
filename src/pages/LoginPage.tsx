import { IonButton, IonContent, IonFooter, IonPage } from '@ionic/react';
import './../App.css';
import LoginTiles from './../components/LoginTiles';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
    const history = useHistory();
    const handleGoToDashboard = () => {
        history.push('/dashboard');
    };
    return (
        <IonPage>
            <IonContent>
                <div className='h-screen relative'>
                    <section className="h-full bg-primary overflow-hidden flex justify-center items-center flex-col p-2 relative">
                        <div className="main-circle flex flex-col justify-center items-center relative">
                            <LoginTiles />
                        </div>
                        <IonFooter className="sm:hidden absolute bottom-0 left-0 w-full">
                            <IonButton color="light" className="w-full text-primary rounded" onClick={handleGoToDashboard}>Next</IonButton>
                        </IonFooter>
                    </section>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default LoginPage;
