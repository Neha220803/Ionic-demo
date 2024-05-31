import { IonText } from "@ionic/react";

const OrderHistoryTile = () => {
    const orders = [
        { label: "Print 1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Print 2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Print 3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Print 4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Print 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Print 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Print 7", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Print 8", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
        { label: "Print 9", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
    ];

    return (
        <div>
            <div className="text-sm font-bold sm:text-3xl sticky top-0 z-10 bg-white py-3 sm:py-7">Order History</div>
            <div className="overflow-hidden">
                {orders.map((order, index) => (
                    <div key={index} className="bg-gray-100 rounded px-4 py-2 sm:p-5 mb-4">
                        <div className="font-semibold">
                            <IonText className="text-sm sm:text-base">{order.label}</IonText>
                        </div>
                        <IonText className="text-sm sm:text-base">{order.description}</IonText>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OrderHistoryTile