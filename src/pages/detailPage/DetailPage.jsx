import React, { useEffect, useState } from 'react'
import { request } from '../../api'
import { useParams } from 'react-router-dom'
import TopScroll from '../../components/top-scroll/top-scroll'
import { h2 } from 'framer-motion/client'
import { Skeleton } from 'antd'

const DetailPage = () => {

    const { id } = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        request
            .get(`/autodeals/${id}`)
            .then(res => setData(res.data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [id])

    console.log(data);

    return (
        <>
            <TopScroll />
            {
            loading ? <div className='containerL'>
                <div className='mt-[150px] mb-[138px] flex items-center justify-center gap-3.5'>
                <Skeleton.Image 
                    active
                    style={{
                        width: "700px",
                        height: '450px',
                        borderRadius: '4px'
                    }}
                />
                <Skeleton 
                    active
                    paragraph={{rows: 10}}
                />
            </div>
            </div>
            : <section className="py-10 bg-gray-50 mt-[100px]">
                <div className="containerL mx-auto px-4">
                    <div className="flex flex-col lg:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
                        <div className="lg:w-1/2 w-full">
                            <img
                                src={data?.image}
                                alt={data?.name}
                                className="w-full h-full object-cover select-none"
                            />
                        </div>

                        <div className="lg:w-1/2 w-full p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                                    {data?.name}
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    {data?.description}
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-6">
                                    <div className="flex items-center">
                                        <span className="font-semibold w-32">Brend:</span>
                                        <span>{data?.brand}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold w-32">Yili:</span>
                                        <span>{data?.year}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold w-32">Rangi:</span>
                                        <span>{data?.color}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold w-32">Transmission:</span>
                                        <span>{data?.transmission}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold w-32">Yoqilg'i:</span>
                                        <span>{data?.fuel_type}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <span className="font-semibold w-32">Narxi/Kun:</span>
                                        <span className="font-bold text-blue-600">
                                            {data?.price_per_day}$
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Tugmalar */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
                                    Xarid qilish
                                </button>
                                <button className="w-full sm:w-auto border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition">
                                    Wishlistga qo‘shish
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            }

        </>

    )
}

export default React.memo(DetailPage)