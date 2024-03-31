import React from "react";
import { CategoryForm } from "../../components/categoryForm";
import { useCreateCategory } from "./service/mutation/useCreateCategory";
import { useNavigate } from "react-router-dom";

export const Category = () => {
    const { mutate } = useCreateCategory()
    const navigate = useNavigate()
    const submit = (data) => {
        mutate(data, {
            onSuccess: () => {
                navigate('/app/categorypage')
            }
        })
    };

    return (
        <>
            <CategoryForm submit={submit} />
        </>
    );
};
