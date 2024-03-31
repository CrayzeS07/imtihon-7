import React from "react";
import vector2 from "../assets/vector2.svg";
import { useForm } from "react-hook-form";



export const CategoryForm = ({ submit, initialValue }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    return (
        <div className="flex justify-center">
            <div className="w-[1179px] h-[1435px] bg-[#fff] flex justify-center mt-[40px] rounded-[12px]">
                <div className="w-[1130px] h-[634px] border mt-[40px]">
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="ml-[49px]">
                            <div>
                                <div className="flex gap-[4px] mt-[40px]">
                                    <p className="text-[17px] font-mulish font-semibold">Название</p><span className="text-[#F1419D]">*</span>
                                </div>
                                <div>
                                    <div className="mt-[12px] flex">
                                        <input

                                            {...register("categoryName", { required: true, maxLength: 100 })}
                                            className={`w-[764px] h-[44px] bg-[#F6F6FB] rounded-[6px] outline-none p-[10px] text-[15px] text-[#60607A] font-semibold ${errors.categoryName && "border border-pink-500"}`}
                                            type="text"
                                            defaultValue={initialValue?.categoryName}
                                        />
                                        {errors.categoryName ? (
                                            <img className="ml-[12px]" src={vector2} alt="" />
                                        ) : null}
                                    </div>
                                    <div>
                                        {errors.categoryName?.type === "maxLength" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">имя не должно превышать 100 текст</p>
                                        )}
                                        {errors.categoryName?.type === "required" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">требуется имя</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[40px]">
                                <div>
                                    <div className="flex gap-[4px] mt-[40px]">
                                        <p className="text-[17px] font-mulish font-semibold">Бренд</p><span className="text-[#F1419D]">*</span>
                                    </div>
                                    <div className="flex">
                                        <input
                                            defaultValue={initialValue?.brandName}
                                            {...register("brandName", { required: true, maxLength: 40 })}
                                            className={`w-[362px] h-[44px] bg-[#F6F6FB] mt-[12px] rounded-[6px] outline-none p-[10px] text-[15px] text-[#60607A] font-semibold  ${errors.brandName && "border border-pink-500"}`} type="text" />
                                        {errors.brandName ? (
                                            <img className="ml-[12px]" src={vector2} alt="img" />
                                        ) : null}
                                    </div>
                                    <div>
                                        {errors.brandName?.type === "maxLength" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">имя не должно превышать 40 текст</p>
                                        )}
                                        {errors.brandName?.type === "required" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">Обозначение бренда обязательно</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-[4px] mt-[40px]">
                                        <p className="text-[17px] font-mulish font-semibold">Артикул производителя</p><span className="text-[#F1419D]">*</span>
                                    </div>
                                    <div className="flex">
                                        <input
                                            defaultValue={initialValue?.cod}
                                            {...register("cod", { required: true, maxLength: 40 })}
                                            className={`w-[362px] h-[44px] bg-[#F6F6FB] mt-[12px] rounded-[6px] outline-none p-[10px] text-[15px] text-[#60607A] font-semibold  ${errors.cod && "border border-pink-500"}`} type="text" />
                                        {errors.cod ? (
                                            <img className="ml-[12px]" src={vector2} alt="img" />
                                        ) : null}
                                    </div>
                                    <div>
                                        {errors.cod?.type === "maxLength" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">имя не должно превышать 40 текст</p>
                                        )}
                                        {errors.cod?.type === "required" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">Укажите артикул</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="flex gap-[4px] mt-[40px]">
                                        <p className="text-[17px] font-mulish font-semibold">Страна производства</p><span className="text-[#F1419D]">*</span>
                                    </div>
                                    <div className="flex">
                                        <input
                                            defaultValue={initialValue?.state}
                                            {...register("state", { required: true, maxLength: 20 })}
                                            className={`w-[362px] h-[44px] bg-[#F6F6FB] text-[15px] text-[#60607A] font-semibold  mt-[12px] rounded-[6px] outline-none p-[10px] ${errors.state && "border border-pink-500"}`} type="text" />
                                        {errors.state ? (
                                            <img className="ml-[12px]" src={vector2} alt="img" />
                                        ) : null}
                                    </div>
                                    <div>
                                        {errors.state?.type === "maxLength" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">имя не должно превышать 20 текст</p>
                                        )}
                                        {errors.state?.type === "required" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">Название страны обязательно.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="flex gap-[4px] mt-[40px]">
                                        <p className="text-[17px] font-mulish font-semibold">Описание</p><span className="text-[#F1419D]">*</span>
                                    </div>
                                    <div className="flex">
                                        <textarea
                                            defaultValue={initialValue?.Description}
                                            {...register("Description", { required: true, maxLength: 1000 })}
                                            className={`w-[764px] h-[110px] bg-[#F6F6FB] mt-[12px] rounded-[6px] outline-none p-[10px] text-[15px] text-[#60607A] font-semibold  ${errors.Description && "border border-pink-500"}`}
                                            type="text" />

                                        {errors.Description ? (
                                            <img className="ml-[12px]" src={vector2} alt="img" />
                                        ) : null}
                                    </div>
                                    <div>
                                        {errors.Description?.type === "maxLength" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">Описание не должно превышать 1000 текстов !</p>
                                        )}
                                        {errors.Description?.type === "required" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">Требуется описание !</p>
                                        )}
                                    </div>
                                </div>
                                <div className="flex gap-[40px] mt-[100px]">
                                    <div>
                                        <div className="flex gap-[4px] mt-[40px]">
                                            <p className="text-[17px] font-mulish font-semibold">Вес с упаковкой, грамм</p><span className="text-[#F1419D]">*</span>
                                        </div>
                                        <div className="flex">
                                            <input
                                                defaultValue={initialValue?.packaging}
                                                {...register("packaging", { required: true, maxLength: 10 })}
                                                className={`w-[228px] h-[44px] bg-[#F6F6FB] mt-[12px] rounded-[6px] outline-none p-[10px] text-[15px] text-[#60607A] font-semibold  ${errors.packaging && "border border-pink-500"}`} type="number" />
                                            {errors.packaging ? (
                                                <img className="ml-[12px]" src={vector2} alt="img" />
                                            ) : null}
                                        </div>
                                        <div>
                                            {errors.packaging?.type === "maxLength" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">числа не должны превышать 10</p>
                                            )}
                                            {errors.packaging?.type === "required" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">обязательный.</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-[4px] mt-[40px]">
                                            <p className="text-[17px] font-mulish font-semibold">Длина упаковки, мм</p><span className="text-[#F1419D]">*</span>
                                        </div>
                                        <div className="flex">
                                            <input
                                                defaultValue={initialValue?.length11}
                                                {...register("length11", { required: true, maxLength: 20 })}
                                                className={`w-[228px] h-[44px] bg-[#F6F6FB] mt-[12px] text-[15px] text-[#60607A] font-semibold  rounded-[6px] outline-none p-[10px] ${errors.length11 && "border border-pink-500"}`} type="text" />
                                            {errors.length11 ? (
                                                <img className="ml-[12px]" src={vector2} alt="img" />
                                            ) : null}
                                        </div>
                                        <div>
                                            {errors.length11?.type === "maxLength" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">числа не должны превышать 20</p>
                                            )}
                                            {errors.length11?.type === "required" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">обязательный.</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-[4px] mt-[40px]">
                                            <p className="text-[17px] font-mulish font-semibold">Ширина упаковки, мм</p><span className="text-[#F1419D]">*</span>
                                        </div>
                                        <div className="flex">
                                            <input
                                                defaultValue={initialValue?.width11}
                                                {...register("width11", { required: true, maxLength: 10 })}
                                                className={`w-[228px] text-[15px] text-[#60607A] font-semibold  h-[44px] bg-[#F6F6FB] mt-[12px] rounded-[6px] outline-none p-[10px] ${errors.width11 && "border border-pink-500"}`} type="number" />
                                            {errors.width11 ? (
                                                <img className="ml-[12px]" src={vector2} alt="img" />
                                            ) : null}
                                        </div>
                                        <div>
                                            {errors.width11?.type === "maxLength" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">числа не должны превышать 10</p>
                                            )}
                                            {errors.width11?.type === "required" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">обязательный.</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-[4px] mt-[40px]">
                                            <p className="text-[17px] font-mulish font-semibold">Высота упаковки, мм</p><span className="text-[#F1419D]">*</span>
                                        </div>
                                        <div className="flex">
                                            <input
                                                defaultValue={initialValue?.heavy}
                                                {...register("heavy", { required: true, maxLength: 10 })}
                                                className={`w-[228px] text-[15px] text-[#60607A] font-semibold  h-[44px] bg-[#F6F6FB] mt-[12px] rounded-[6px] outline-none p-[10px] ${errors.heavy && "border border-pink-500"}`} type="number" />
                                            {errors.heavy ? (
                                                <img className="ml-[12px]" src={vector2} alt="img" />
                                            ) : null}
                                        </div>
                                        <div>
                                            {errors.heavy?.type === "maxLength" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">числа не должны превышать 10</p>
                                            )}
                                            {errors.heavy?.type === "required" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">обязательный.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className="flex gap-[4px] mt-[40px]">
                                            <p className="text-[17px] font-mulish font-semibold">URL-адрес изображения</p><span className="text-[#F1419D]">*</span>
                                        </div>
                                        <div className="flex">
                                            <input
                                                defaultValue={initialValue?.imgUrl}
                                                {...register("imgUrl", { required: true, maxLength: 1000 })}
                                                className={`w-[764px] h-[44px] bg-[#F6F6FB] mt-[12px] text-[15px] text-[#60607A] font-semibold  rounded-[6px] outline-none p-[10px] ${errors.imgUrl && "border border-pink-500"}`} type="url" />
                                            {errors.imgUrl && (
                                                <img className="ml-[12px]" src={vector2} alt="img" />
                                            )}
                                        </div>
                                        <div>
                                            {errors.imgUrl?.type === "maxLength" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">числа не должны превышать 1000</p>
                                            )}
                                            {errors.imgUrl?.type === "required" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">URL изображения обязателен.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="flex gap-[40px]">
                                    <div>
                                        <div className="flex gap-[4px] mt-[40px]">
                                            <p className="text-[17px] font-mulish font-semibold">Артикул</p><span className="text-[#F1419D]">*</span>
                                        </div>
                                        <div className="flex">
                                            <input
                                                defaultValue={initialValue?.vendor}
                                                {...register("vendor", { required: true, maxLength: 20 })}
                                                className={`w-[362px] h-[44px] bg-[#F6F6FB] text-[15px] text-[#60607A] font-semibold  mt-[12px] rounded-[6px] outline-none p-[10px] ${errors.vendor && "border border-pink-500"}`} type="text" />
                                            {errors.vendor ? (
                                                <img className="ml-[12px]" src={vector2} alt="img" />
                                            ) : null}
                                        </div>
                                        <div>
                                            {errors.vendor?.type === "maxLength" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">имя не должно превышать 20 текст</p>
                                            )}
                                            {errors.vendor?.type === "required" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">ввод обязателен.</p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex gap-[4px] mt-[40px]">
                                            <p className="text-[17px] font-mulish font-semibold">Штрихкод</p><span className="text-[#F1419D]">*</span>
                                        </div>
                                        <div className="flex">
                                            <input
                                                defaultValue={initialValue?.Barcode}
                                                {...register("Barcode", { required: true, maxLength: 20 })}
                                                className={`w-[362px] h-[44px] bg-[#F6F6FB] text-[15px] text-[#60607A] font-semibold  mt-[12px] rounded-[6px] outline-none p-[10px] ${errors.Barcode && "border border-pink-500"}`} type="text" />
                                            {errors.Barcode ? (
                                                <img className="ml-[12px]" src={vector2} alt="img" />
                                            ) : null}
                                        </div>
                                        <div>
                                            {errors.Barcode?.type === "maxLength" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">имя не должно превышать 20 текст</p>
                                            )}
                                            {errors.Barcode?.type === "required" && (
                                                <p className="text-[13px] text-[#F1419D] font-medium">ввод обязателен.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-[40px]">
                                <div>
                                    <div className="flex gap-[4px] mt-[40px]">
                                        <p className="text-[17px] font-mulish font-semibold">Цена</p><span className="text-[#F1419D]">*</span>
                                    </div>
                                    <div className="flex">
                                        <input
                                            defaultValue={initialValue?.price}
                                            {...register("price", { required: true, maxLength: 20 })}
                                            className={`w-[228px] h-[44px] text-[15px] text-[#60607A] font-semibold  bg-[#F6F6FB] mt-[12px] rounded-[6px] outline-none p-[10px] ${errors.price && "border border-pink-500"}`} type="text" />
                                        {errors.price ? (
                                            <img className="ml-[12px]" src={vector2} alt="img" />
                                        ) : null}
                                    </div>
                                    <div>
                                        {errors.price?.type === "maxLength" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">имя не должно превышать 20 текст</p>
                                        )}
                                        {errors.price?.type === "required" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">ввод обязателен.</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-[4px] mt-[40px]">
                                        <p className="text-[17px] font-mulish font-semibold">Цена со скидкой</p><span className="text-[#F1419D]">*</span>
                                    </div>
                                    <div className="flex">
                                        <input
                                            defaultValue={initialValue?.discount}
                                            {...register("discount", { required: true, maxLength: 20 })}
                                            className={`w-[228px] h-[44px] bg-[#F6F6FB] text-[15px] text-[#60607A] font-semibold  mt-[12px] rounded-[6px] outline-none p-[10px] ${errors.discount && "border border-pink-500"}`} type="text" />
                                        {errors.discount ? (
                                            <img className="ml-[12px]" src={vector2} alt="img" />
                                        ) : null}
                                    </div>
                                    <div>
                                        {errors.discount?.type === "maxLength" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">имя не должно превышать 20 текст</p>
                                        )}
                                        {errors.discount?.type === "required" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">ввод обязателен.</p>
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <div className="flex gap-[4px] mt-[40px]">
                                        <p className="text-[17px] font-mulish font-semibold">Цена Ozon Premium</p><span className="text-[#F1419D]">*</span>
                                    </div>
                                    <div className="flex">
                                        <input
                                            defaultValue={initialValue?.Premium}
                                            {...register("Premium", { required: true, maxLength: 20 })}
                                            className={`w-[228px] h-[44px] text-[15px] text-[#60607A] font-semibold  bg-[#F6F6FB] mt-[12px] rounded-[6px] outline-none p-[10px] ${errors.Premium && "border border-pink-500"}`} type="text" />
                                        {errors.Premium ? (
                                            <img className="ml-[12px]" src={vector2} alt="img" />
                                        ) : null}
                                    </div>
                                    <div>
                                        {errors.Premium?.type === "maxLength" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">имя не должно превышать 20 текст</p>
                                        )}
                                        {errors.Premium?.type === "required" && (
                                            <p className="text-[13px] text-[#F1419D] font-medium">ввод обязателен.</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center gap-[8px] mt-[100px]">
                                <button type="submit" className="w-[117px] h-[40px] bg-[#1BC58D] rounded-[6px] text-[#fff] text-[14px] font-mulish font-extrabold">Сохранить</button>
                                <button type="reset" className="w-[237px] h-[40px] bg-[#F7F7FF] text-[#80809B] text-[14px] font-mulish font-extrabold rounded-[6px] ">удалить все</button>
                            </div>
                        </div>
                        <div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}