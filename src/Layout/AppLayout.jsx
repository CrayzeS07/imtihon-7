import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import setings from "../assets/setings.svg";
import icon from "../assets/icon/imgP.png"
import korzinka from "../assets/img.svg";
import { Outlet, Link, useLocation } from "react-router-dom";
import vector1 from "../assets/vector1.svg"

export const AppLayout = () => {
    const [clickedDiv, setClickedDiv] = useState(null);
    const location = useLocation();

    const handleDivClick = (divName) => {
        if (clickedDiv === divName) {
            setClickedDiv(null);
        } else {
            setClickedDiv(divName);
        }
    };

    return (
        <>
            <div className="w-full h-[80px] bg-[#ffffff]">
                <div className="flex">
                    <div className="flex">
                        <div className="w-[97px] h-[80px] bg-[#5B5CE2]">
                            <div className="flex justify-center pt-[30px]">
                                <img src={Logo} alt="Logo" />
                            </div>
                        </div>
                        <div className="ml-[40px] mt-[16px]">
                            <h2 className="text-[18px] font-mulish font-extrabold text-[#212121]">Товары</h2>
                            <div className="w-[236px] flex">
                                <Link to="/app">
                                    <span className="text-[13px] text-[#B5B5C3] font-mulish font-bold">Главная /</span>
                                </Link>
                                <Link>
                                    <span className="text-[13px] text-[#B5B5C3] font-mulish font-bold"> Товары  /</span>
                                </Link>
                                <Link to="/app/category">
                                    <span className="text-[13px] text-[#B5B5C3] font-mulish font-bold">{location.pathname === "/app/category" ? "Новый товар" : ""}</span>
                                </Link>
                            </div>
                        </div>
                        <div className="ml-[1350px] mt-[20px]">
                            <div className="w-[105px] h-[40px] bg-[#F7F7FF] flex justify-center rounded-[6px] cursor-pointer">
                                <p className="text-[14px] text-[#212121] font-mulish font-bold mt-[10px]">профиль</p>
                                <img className="w-[20px] h-[15px] mt-[14px] ml-[8px]" src={vector1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex  h-[100%]">
                <div className="w-[102px] h-screen  bg-[#5B5CE2]">
                    <div>
                        <div className="flex justify-center">
                            <Link to="/app">
                                <div onClick={() => handleDivClick("settings")} className={`w-[49px] ${clickedDiv === "settings" ? 'bg-[#353596]' : ''}  h-[50px] mt-[20px] rounded-[6px] duration-300 flex justify-center  hover:bg-[#6C6DE5]`}>
                                    <img className="w-[25px] h-[25px] mt-[13px]" src={setings} alt="seting" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center mt-[20px]">
                            <Link to="/app/category">
                                <div onClick={() => handleDivClick("cart")} className={`w-[49px] h-[50px] rounded-[6px]  ${clickedDiv === "cart" ? 'bg-[#353596]' : ''} duration-300 flex justify-center hover:bg-[#6C6DE5]`}>
                                    <img className="w-[25px] h-[25px] mt-[13px]" src={korzinka} alt="seting" />
                                </div>
                            </Link>
                        </div>
                        <div className="flex justify-center mt-[20px]">
                            <Link to="/app/categorypage">
                                <div onClick={() => handleDivClick("icon")} className={`w-[49px] h-[50px] rounded-[6px]  ${clickedDiv === "icon" ? 'bg-[#353596]' : ''} duration-300 flex justify-center hover:bg-[#6C6DE5]`}>
                                    <img className="w-[25px] h-[25px] mt-[13px]" src={icon} alt="seting" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" w-full h-[100%] bg-[#EAEAF0]">
                    <Outlet />
                </div>
            </div>
        </>
    );
};
