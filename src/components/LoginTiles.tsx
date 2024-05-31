import { IonContent, IonInput, IonLabel, IonPage, IonText } from '@ionic/react';
import { FaArrowRight, FaFacebook, FaForward, FaGoogle, FaLinkedin } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { useHistory } from 'react-router-dom';

const LoginTiles = () => {
    const history = useHistory();
    const handleGoToDashboard = () => {
        history.push('/dashboard');
    };
    const handleGoToSignup = () => {
        history.push('/signup');
    };
    return (

        <div className="flex flex-col items-center justify-center">
            <h1 className="text-lg md:text-2xl sm:text-xl lg:text-3xl mb-2 text-center">Log In to your <span className='font-bold'>Print&Go</span> account</h1>
            <h6 className='mb-5 hover:underline flex gap-2 justify-center items-center cursor-pointer' onClick={handleGoToSignup}>
                Create an Account<FaArrowRight />
            </h6>
            <div className='grid grid-cols-12 gap-4 px-20'>
                <div className="hidden sm:col-span-2 sm:flex items-center justify-center flex-col">
                    <div className='text-xl my-auto items-center'>Email</div>
                    <div className='text-xl my-auto items-center'>Password</div>
                </div>
                <div className="col-span-12 sm:col-span-7 flex items-center justify-center flex-col gap-4 w-full">
                    <div className="w-full">
                        <IonLabel className='sm:hidden'>Email</IonLabel>
                        <IonInput fill="outline" className='w-full' />
                    </div>
                    <div className="w-full">
                        <IonLabel className='sm:hidden'>Password</IonLabel>
                        <IonInput fill="outline" className='w-full' />
                    </div>
                </div>
                <div className="hidden sm:col-span-2 bg-primary rounded sm:flex items-center justify-center flex-col">
                    <div className=' flex items-center justify-center cursor-pointer' onClick={handleGoToDashboard}>
                        <IonText className="text-center p-5"><FaArrowRight color='white' /></IonText>
                    </div>
                </div>
            </div>
            <div className="">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-center">Sign In With</h2>
                <div className='grid grid-cols-3 gap-2 px-5'>
                    <div className="bg-gray-100 p-3 rounded-md flex justify-center items-center gap-2 cursor-pointer">
                        <FcGoogle className="text-xs sm:text-lg" />
                        <span className="text-xs sm:text-base">Google</span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-md flex justify-center items-center gap-2 cursor-pointer">
                        <FaFacebook color='#1877F2' className="text-xs sm:text-lg" />
                        <span className="text-xs sm:text-base">Facebook</span>
                    </div>
                    <div className="bg-gray-100 p-3 rounded-md flex justify-center items-center gap-2 cursor-pointer">
                        <FaLinkedin color='#0077b5' className="text-xs sm:text-lg" />
                        <span className="text-xs sm:text-base">LinkedIn</span>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default LoginTiles;
