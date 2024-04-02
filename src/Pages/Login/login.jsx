import React from "react";
import { useForm } from "react-hook-form";
import { useLogin } from "./service/useLogin";
import Cookies from "js-cookie";
import { saveState } from "../../config/storage";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const { mutate } = useLogin()
    const navigate = useNavigate()
    const { register, reset, handleSubmit } = useForm()
    const submit = (data) => {
        mutate(data, {
            onSuccess: (res) => {
                Cookies.set("user_token", res.accessToken, { expires: 3 })
                saveState("user", res.user)
                navigate("/app", { replace: true })
            }
        })
        reset()
    }
    return (
        <>
            <div className="w-full h-screen z-[-10000] justify-between absolute flex">
                <div className="bg-[#5B5CE2] w-[100%] h-[100vh]">
                    <img className="w-[800px] h-[500px] mt-[150px]" src="https://laravel.spruko.com/hogo/demo/img/support2.png" alt="img" />
                </div>
                <div className="w-[100%] h-[100vh] bg-[#ffffff]">
                    <div className="mt-[220px] flex justify-center">
                        <h1 className="text-[25px] font-mulish font-bold text-[#5B5CE2]">Admin Panel Login</h1>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[500px] h-[400px] border-[3px] mt-[10px] border-[#ffffff00] rounded-[10px]">
                            <form onSubmit={handleSubmit(submit)}>
                                <div className="mt-[50px]">
                                    <h4 className=" pl-[70px] font-mulish text-[15px] text-[#212121] font-bold">Email</h4>
                                    <div className="flex justify-center mt-[7px]">
                                        <input defaultValue={"crayzesuzb777@gmail.com"} className=" font-mulish text-[18px] text-[6b6a6a52] font-medium  w-[362px] h-[44px] bg-[#F6F6FB] border border-[#6b6a6a52] rounded-[6px] outline-none p-[10px]" {...register('email', { required: true })} type="email" />
                                    </div>
                                </div>
                                <div className="mt-[50px]">
                                    <h4 className=" pl-[70px] font-mulish text-[15px] text-[#212121] font-bold">password</h4>
                                    <div className="flex justify-center mt-[7px]">
                                        <input defaultValue={"crazy"} className=" font-mulish text-[18px] text-[6b6a6a52] font-medium  w-[362px] h-[44px] bg-[#F6F6FB] border border-[#6b6a6a52] rounded-[6px] outline-none p-[10px]" {...register('password', { required: true })} type="password" />
                                    </div>
                                </div>
                                <div className="flex justify-center mt-[50px]">
                                    <button type="submit" className="w-[362px] h-[44px] hover:bg-[#fff] hover:text-[#5B5CE2]  hover:border-[2px]  duration-200  hover:border-[#5B5CE2] border-[2px] bg-[#5B5CE2] rounded-[10px] text-[#fff] text-[20px] font-mulish font-semibold">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}