import { IonText } from '@ionic/react';
import logo from './../assets/logo.png';
import { FaArrowLeft, FaEdit } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const InfoTile = () => {
    const history = useHistory();

    const handleGoToLoginPage = () => {
        history.push('/login');
    };
    return (
        <div className='bg-primary h-full flex flex-col justify-around py-5 items-center'>
            <div className="flex flex-col justify-around">
                <img src={logo} width="50" />
                <IonText color="light" className="font-bold text-xl sm:text-4xl mt-5">
                    Good morning, John!
                </IonText>
                <IonText color="light">Print&Go user since July 20, 2020</IonText>
            </div>
            <div className="w-full hidden sm:block">
                <div className="flex justify-between items-center w-full px-5 ">
                    <IonText color="light">Personal Information</IonText>
                    <IonText color="light flex justify-center items-center gap-2">
                        Edit <FaEdit />
                    </IonText>
                </div>
                <div className="flex justify-between flex-col gap-2 w-full px-5 mt-3">
                    <IonText color="light">Demo Account</IonText>
                    <IonText color="light">+971 50 123 4567</IonText>
                    <IonText color="light">john.s@printandgo.ae</IonText>
                </div>
                <div className="flex items-center text-gray-500 w-full px-5 gap-2 mt-5" onClick={handleGoToLoginPage}>
                    <FaArrowLeft />
                    <IonText className="text-gray flex justify-center items-center">Log Out</IonText>
                </div>
            </div>
        </div>
    )
}

export default InfoTile