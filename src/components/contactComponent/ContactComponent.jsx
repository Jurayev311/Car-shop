import React from "react";

const ContactComponent = () => {
    return (
        <section className="bg-gradient-to-br from-white to-blue-50 min-h-screen py-16">
            <div className="container mx-auto px-4">
                <h2 className="mt-[90px] text-4xl md:text-5xl font-extrabold text-center text-gray-800">
                    Biz siz bilan bog'lanamiz!
                </h2>

                <div className="flex items-center justify-center mt-10">
                    <form
                        className="
                            w-full 
                            max-w-[500px] 
                            bg-white 
                            shadow-xl 
                            border border-gray-100 
                            p-8 
                            rounded-2xl 
                            mb-10 
                            space-y-6
                            transition
                            duration-300
                            ease-in-out
                        "
                        action=""
                    >
                        <div className="relative">
                            <input
                                className="
                                    peer
                                    w-full 
                                    border border-gray-300 
                                    p-4 
                                    rounded-lg 
                                    focus:outline-none 
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                    placeholder-transparent
                                    transition
                                    duration-300
                                    text-base
                                "
                                type="text"
                                placeholder="Ismingiz va familiya"
                                id="fullname"
                            />
                            <label
                                htmlFor="fullname"
                                className="
                                    absolute 
                                    left-4 
                                    top-4 
                                    text-gray-500 
                                    text-base 
                                    pointer-events-none
                                    transition-all
                                    duration-300
                                    peer-placeholder-shown:top-4 
                                    peer-placeholder-shown:text-base
                                    peer-focus:-top-3 
                                    peer-focus:text-sm 
                                    peer-focus:text-blue-600
                                    bg-white 
                                    px-1
                                "
                            >
                                Ismingiz va familiya
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                className="
                                    peer
                                    w-full 
                                    border border-gray-300 
                                    p-4 
                                    rounded-lg 
                                    focus:outline-none 
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                    placeholder-transparent
                                    transition
                                    duration-300
                                    text-base
                                "
                                type="number"
                                placeholder="Yoshingiz"
                                id="age"
                            />
                            <label
                                htmlFor="age"
                                className="
                                    absolute 
                                    left-4 
                                    top-4 
                                    text-gray-500 
                                    text-base 
                                    pointer-events-none
                                    transition-all
                                    duration-300
                                    peer-placeholder-shown:top-4 
                                    peer-placeholder-shown:text-base
                                    peer-focus:-top-3 
                                    peer-focus:text-sm 
                                    peer-focus:text-blue-600
                                    bg-white 
                                    px-1
                                "
                            >
                                Yosh
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                className="
                                    peer
                                    w-full 
                                    border border-gray-300 
                                    p-4 
                                    rounded-lg 
                                    focus:outline-none 
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                    placeholder-transparent
                                    transition
                                    duration-300
                                    text-base
                                "
                                type="tel"
                                placeholder="Telefon raqam"
                                id="phone"
                            />
                            <label
                                htmlFor="phone"
                                className="
                                    absolute 
                                    left-4 
                                    top-4 
                                    text-gray-500 
                                    text-base 
                                    pointer-events-none
                                    transition-all
                                    duration-300
                                    peer-placeholder-shown:top-4 
                                    peer-placeholder-shown:text-base
                                    peer-focus:-top-3 
                                    peer-focus:text-sm 
                                    peer-focus:text-blue-600
                                    bg-white 
                                    px-1
                                "
                            >
                                Telefon raqam
                            </label>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="
                                    w-full 
                                    py-3 
                                    bg-blue-600 
                                    hover:bg-blue-700 
                                    text-white 
                                    font-semibold 
                                    rounded-lg 
                                    shadow 
                                    transition
                                    duration-300
                                    text-base
                                "
                            >
                                Yuborish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default React.memo(ContactComponent);
