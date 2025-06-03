import React from "react";
import toyota from "../../assets/ToyotaCamryNew.png";
import tcross from "../../assets/T-Cross2023.png";
import cclass from "../../assets/C-Class.png";
import ford from "../../assets/FordTransit.png";
import GLC from "../../assets/NewGLC_2023.png";
import audi from "../../assets/Audi A63.5.png";
import Corolla from "../../assets/CorollaAltis.png";
import forde from "../../assets/FordExplorer.png";

const Cars = [
    {
        id: 1,
        badge: "Great Price",
        image: toyota,
        title: "Toyota Camry New",
        description: "3.5 D5 PowerPulse Momentum 5dr AWD",
        mileage: "20 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$40,000",
    },
    {
        id: 2,
        image: tcross,
        title: "T-Cross — 2023",
        description: "4.0 D5 PowerPulse Momentum 5dr AWD",
        mileage: "15 Miles",
        fuel: "Petrol",
        transmission: "CVT",
        price: "$15,000",
    },
    {
        id: 3,
        image: cclass,
        title: "C-Class — 2023",
        description: "4.0 D5 PowerPulse Momentum 5dr AWD",
        mileage: "50 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$150,000",
    },
    {
        id: 4,
        badge: "Great Price",
        image: ford,
        title: "Ford Transit — 2021",
        description: "4.0 D5 PowerPulse Momentum 5dr AWD",
        mileage: "2500 Miles",
        fuel: "Diesel",
        transmission: "Manual",
        price: "$22,000",
    },
    {
        id: 5,
        badge: "Low Mileage",
        image: GLC,
        title: "New GLC — 2023",
        description: "4.0 D5 PowerPulse Momentum 5dr AWD",
        mileage: "50 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$95,000",
    },
    {
        id: 6,
        image: audi,
        title: "Audi A6 3.5 — New",
        description: "3.5 D5 PowerPulse Momentum 5dr AWD",
        mileage: "100 Miles",
        fuel: "Petrol",
        transmission: "Automatic",
        price: "$58,000",
    },
    {
        id: 7,
        image: Corolla,
        title: "Corolla Altis — 2023",
        description: "3.5 D5 PowerPulse Momentum 5dr AWD",
        mileage: "15000 Miles",
        fuel: "Petrol",
        transmission: "CVT",
        price: "$45,000",
    },
    {
        id: 8,
        badge: "Great Price",
        image: forde,
        title: "Ford Explorer 2023",
        description: "3.5 D5 PowerPulse Momentum 5dr AWD",
        mileage: "10 Miles",
        fuel: "Diesel",
        transmission: "CVT",
        price: "$35,000",
    },
];

const Explore = () => {
    return (
        <section className="mt-[130px]">
            <div className="containerL">
                <h2 className="text-[36px] font-bold mb-[40px]">Explore All Vehicles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {Cars.map((car) => (
                        <div
                            key={car.id}
                            className="bg-white shadow rounded-2xl overflow-hidden p-4 relative"
                        >
                            {car.badge && (
                                <span className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold py-1 px-2 rounded-md">
                                    {car.badge}
                                </span>
                            )}
                            <img
                                src={car.image}
                                alt={car.title}
                                className="w-full h-[170px] object-cover rounded-xl mb-4"
                            />
                            <h3 className="font-bold text-lg mb-1">{car.title}</h3>
                            <p className="text-sm text-gray-500 mb-3">{car.description}</p>
                            <div className="flex justify-between text-sm text-gray-600 mb-3">
                                <span>{car.mileage}</span>
                                <span>{car.fuel}</span>
                                <span>{car.transmission}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">{car.price}</span>
                                <a
                                    href="#"
                                    className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                    View Details →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default React.memo(Explore);
