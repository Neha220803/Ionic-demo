import { IonPage, IonText } from "@ionic/react";
import "./../App.css";

import { FaArrowLeft, FaEdit } from "react-icons/fa";

import AddressTile from "../components/AddressTile";
import OrderHistoryTile from "../components/OrderHistoryTile";
import InfoTile from "../components/InfoTile";

const Dashboard = () => {


    return (
        <IonPage>
            <div className="h-screen grid grid-cols-1 lg:grid-cols-3 overflow-y-auto">
                <div >
                    <InfoTile />
                </div>
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2  gap-4 bg-gray-200 p-5 h-screen overflow-y-auto">
                    <div className="bg-white rounded px-5 h-screen overflow-y-auto  mb-4 lg:mb-0">
                        <AddressTile />
                    </div>
                    <div className="bg-white rounded h-screen overflow-y-auto px-5">
                        <OrderHistoryTile />
                    </div>
                    <div className="w-full h-min bg-primary py-5 md:hidden">
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
                    </div>

                </div>
            </div>
        </IonPage>
    );
};

export default Dashboard;
