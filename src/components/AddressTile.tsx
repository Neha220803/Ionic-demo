import { IonText } from "@ionic/react";


const AddressTile = () => {

    const addresses = [
        { label: "Home", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Work", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Other", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Home", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Work", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Other", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Home", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Work", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Other", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ];

    return (
        <div>
            <div className="text-sm font-bold sm:text-3xl sticky top-0 z-10 bg-white py-3 sm:py-7">Saved Address</div>
            <div className="overflow-hidden">


                {addresses.map((address, index) => (
                    <div key={index} className="bg-gray-100 rounded  px-4 py-2 sm:p-5 mb-4">
                        <div className="font-semibold">
                            <IonText className="text-sm sm:text-base">{address.label}</IonText>
                        </div>
                        <IonText className="text-sm sm:text-base">{address.description}</IonText>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AddressTile