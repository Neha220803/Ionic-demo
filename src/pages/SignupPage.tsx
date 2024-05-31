import { IonButton, IonContent, IonFooter, IonInput, IonLabel, IonPage } from '@ionic/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { useHistory } from 'react-router';
import './../components/LandingPageArea.css';

const SignupPage = () => {
    const history = useHistory();

    const handleGoToLoginPage = () => {
        history.push('/login');
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <section className="h-screen grid grid-cols-12 text-white bg-primary px-6">
                    <div className="col-span-12 sm:col-span-7 flex justify-center items-center p-4 flex-col">
                        <h1 className="text-lg md:text-2xl sm:text-xl lg:text-3xl mb-2 text-center">Create your <span className='font-bold'>Print&Go</span> account</h1>
                        <h6 className='mb-5 text-center cursor-pointer flex justify-center items-center gap-2 hover:underline' onClick={handleGoToLoginPage}>
                            <FaArrowLeft /> Login instead
                        </h6>
                        <div className='w-full flex justify-center items-center'>
                            <div className='grid grid-cols-12 gap-4 w-full'>
                                <div className="hidden sm:col-span-2 sm:flex items-center justify-center flex-col">
                                    <div className='text-xl my-auto items-center'>Email</div>
                                    <div className='text-xl my-auto items-center'>Phone</div>
                                    <div className='text-xl my-auto items-center'>Password</div>
                                </div>
                                <div className="col-span-12 sm:col-span-10 flex items-center justify-center flex-col gap-4 w-full">
                                    <div className="w-full">
                                        <IonLabel className='sm:hidden'>Email</IonLabel>
                                        <IonInput fill="solid" className='w-full' />
                                    </div>
                                    <div className="w-full">
                                        <IonLabel className='sm:hidden'>Phone</IonLabel>
                                        <IonInput fill="solid" className='w-full' />
                                    </div>
                                    <div className="w-full">
                                        <IonLabel className='sm:hidden'>Password</IonLabel>
                                        <IonInput fill="solid" className='w-full' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden sm:col-span-5 sm:flex items-center justify-center flex-col">
                        <div className="flex flex-col justify-center items-center p-4">
                            <div className="white-circle p-5 flex items-center justify-center" onClick={handleGoToLoginPage}>
                                <div className="text-primary text-center cursor-pointer flex justify-center items-center gap-2 hover:underline">
                                    Create Account <FaArrowRight />
                                </div>
                            </div>
                        </div>

                    </div>
                    <IonFooter className="sm:hidden absolute bottom-0 left-0 w-full">
                        <IonButton color="light" className="w-full text-primary rounded" onClick={handleGoToLoginPage}>Create Account</IonButton>
                    </IonFooter>
                </section>

            </IonContent>
        </IonPage>
    );
}

export default SignupPage;
