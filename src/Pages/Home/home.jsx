import React from "react";
import Banner from "../../assets/Banner.svg"
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <>
            <div className="w-[100%] flex justify-center h-screen">
                <div className="w-[1379px] h-[648px] rounded-[12px] mt-[80px] bg-[#fff]">
                    <h1 className="text-[21px] text-[#212121] font-mulish font-bold text-center mt-[30px]">раздел создания категорий</h1>
                    <div className="mt-[64px] flex justify-center">
                        <img src={Banner} alt="Banner" />
                    </div>
                    <div className="flex justify-center mt-[66px] gap-[40px]">
                        <Link to="/app/category">
                            <button className="w-[223px] h-[48px] bg-[#1BC58D] rounded-[6px] text-[#fff] font-mulish font-bold text-[15px]">Создать товар</button>
                        </Link>
                        <Link to="/app/categorypage">
                            <button className="w-[223px] h-[48px] bg-[#1BC58D] rounded-[6px] text-[#fff] font-mulish font-bold text-[15px]">перейти на панель продуктов</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}