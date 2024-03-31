import React from "react";
import search from "../../assets/Search.svg"
import { useGetCategorylist } from "./service/query/useGetCategorylist";
import { Link } from "react-router-dom";

export const CategoryPage = () => {
    const { data } = useGetCategorylist()
    return (
        <>
            <div className="flex justify-center w-[100%] h-screen ">
                <div className="w-[1379px] h-[687px] rounded-[12px] mt-[60px] bg-[#fff]">
                    <div className="mt-[10px] ml-[24px]">
                        <div className="flex justify-between p-[25px]">
                            <div>
                                <h2 className="text-[16px] text-[#212121] font-bold font-mulish">{`Все товары (${data && data.length})`}</h2>
                            </div>
                            <div className="w-[250px] h-[40px] bg-[#F7F7FF] rounded-[12px] flex justify-center">
                                <img className="w-[20px] h-[20px] mt-[12px] ml-[20px]" src={search} alt="" />
                                <input className="w-[250px] h-[40px] bg-[#F7F7FF] p-[5px] rounded-[12px] outline-none text-[#A4A4BA] text-[ 15px] font-mulish font-bold" type="search" placeholder="Поиск" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex mt-[30px]">
                            <p className="text-[14px] font-mulish font-extrabold text-[#B5B5C3] ml-[72px]">imgs</p>
                            <p className="text-[14px] font-mulish font-extrabold text-[#B5B5C3] ml-[130px]">Наименование</p>
                            <p className="text-[14px] font-mulish font-extrabold text-[#B5B5C3] ml-[182px]">Артикул</p>
                            <p className="text-[14px] font-mulish font-extrabold text-[#B5B5C3] ml-[154px]">Ozon</p>
                            <p className="text-[14px] font-mulish font-extrabold text-[#B5B5C3] ml-[126px]">WB</p>
                            <p className="text-[14px] font-mulish font-extrabold text-[#B5B5C3] ml-[139px]">VK</p>
                        </div>
                    </div>
                    <div>
                        <div className="overflow-y-auto h-[407px]">
                            {data?.map((item) =>
                                <div className="border-[0.5px] border-b border-[#E8E8F1] flex" key={item.id}>
                                    <div className="ml-[40px] border-[#E8E8F1] border-b ">
                                        <img className="w-[120px]" src={item.imgUrl} alt="" />
                                    </div>
                                    <div className="ml-[100px] mt-[50px] w-[80px]">
                                        <p className="text-[12px] text-[#212121] font-medium font-mulish">{item.cod}</p>
                                    </div>
                                    <div className="mt-[50px] ml-[140px]">
                                        <p className="text-[12px] text-[#212121] font-medium font-mulish">{item.vendor}</p>
                                    </div>
                                    <div className="mt-[50px] ml-[110px]">
                                        <p className="text-[12px] text-[#212121] font-medium font-mulish">{item.Premium}</p>
                                    </div>
                                    <div className="mt-[50px] ml-[70px]">
                                        <p className="text-[12px] text-[#212121] font-medium font-mulish">{item.discount}</p>
                                    </div>
                                    <div className="mt-[50px] ml-[75px]">
                                        <p className="text-[12px] text-[#212121] font-medium font-mulish">{item.price}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mt-[45px] flex justify-center">
                        <Link to="/app/category">
                            <button className="w-[154px] h-[40px] bg-[#1BC58D] rounded-[6px] text-[#fff] font-mulish text-[14px] font-bold">+ Новый товар</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}