import React, { useEffect, useState } from "react";
import { request } from "../../api";
import { IoColorFill } from "react-icons/io5";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { TbAutomaticGearbox } from "react-icons/tb";
import { Skeleton } from "antd";
import { Link } from "react-router-dom";

const Explore = () => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        request
            .get("/autodeals")
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])    

    return (
        <section className="mt-[130px]">
            <div className="containerL">
                <h2 className="text-[36px] font-bold mb-[40px]">Mashinalar bilan tanishing</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                    loading ? Array.from({length: 8}).map((_, index) => (
                        <div key={index}>
                            <Skeleton.Image 
                                active
                                className="mb-2.5"
                                style={{
                                    width: "300px",
                                    height: "170px"
                                }}
                            />

                            <Skeleton
                                active
                                paragraph={{rows: 2}}
                                title={{width: "60%"}}
                            />
                        </div>
                    ))
                    : data?.slice(0, 8).map((car) => (
                        <div
                            key={car.id}
                            className="bg-white shadow rounded-2xl overflow-hidden p-4 relative"
                        >
                            <img
                                src={car?.image}
                                alt={car?.name}
                                className="w-full h-[170px] object-cover rounded-xl mb-4"
                            />
                            <h3 className="font-bold text-lg mb-1">{car?.name}</h3>
                            <p title={car?.description} className="text-sm text-gray-500 mb-3 line-clamp-2">{car?.description}</p>
                            <div className="flex justify-between text-sm text-gray-600 mb-3 italic">
                                <span className="flex items-center gap-1"><IoColorFill />{car?.color}</span>
                                <span className="flex items-center gap-1"><BsFillFuelPumpFill />{car?.fuel_type}</span>
                                <span className="flex items-center gap-1"><TbAutomaticGearbox />{car?.transmission}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-lg font-semibold">{car?.price_per_day}$</span>
                                <Link
                                    to={`/auto/${car.id}`}
                                    className="text-blue-600 hover:underline text-sm font-medium"
                                >
                                    To‘liq ma’lumot →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                 <div className="flex items-center justify-center mt-[50px]">
                    <Link to={'/listing'} className="py-3 px-7 bg-blue-600 text-white rounded-xl cursor-pointer hover:bg-blue-700 duration-200">Barchasini ko‘rish</Link>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Explore);