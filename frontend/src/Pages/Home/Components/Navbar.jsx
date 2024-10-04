import React from "react";

const Navbar = () => {
    return (
        <header className="flex flex-1 justify-between items-center mt-6">
            <div className="flex gap-x-4 items-center">
                <div>
                    <img
                        className="rounded-full w-14 h-14"
                        src="/images/mohammad.png"
                        alt="profile photo"
                    />
                </div>
                <div>
                    <p className="text-xl font-bold">محمد رضایی</p>
                    <p className="text-gray-700">برنامه نویس فول استک</p>
                </div>
            </div>
            <div className="flex gap-x-5 items-center">
                <div className="flex relative rounded-sm overflow-hidden items-center">
                    <input
                        className="py-3 w-80 ps-2 outline-none"
                        type="text"
                        placeholder="جستجو کنید"
                    />
                    <button className="absolute top-1 end-1 px-4 py-2 bg-blue-800 text-gray-100 rounded-md">جستجو</button>
                </div>
                <div className="bg-blue-800 p-3 rounded-full text-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                    </svg>
                </div>
                <div className="bg-blue-800 p-3 rounded-full text-gray-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                        />
                    </svg>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
