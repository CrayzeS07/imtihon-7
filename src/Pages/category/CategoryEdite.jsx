import React from "react";
import { CategoryForm } from "../../components/categoryForm";
import { useGetSingleCategory } from "./service/query/useGetSingleCategory";
import { useNavigate, useParams } from "react-router-dom";
import { useEditCateGoryPage } from "./service/mutation/useEditCateGoryPage";

export const CategoryEdite = () => {
    const { id } = useParams()
    const { mutate } = useEditCateGoryPage(id)
    const { data, isLoading } = useGetSingleCategory(id);
    const navigate = useNavigate()
    const submit = (data) => {
        mutate(data, {
            onSuccess: () => {
                navigate('/app/categorypage')
            }
        })
    }
    return (
        <>
            <CategoryForm initialValue={data} submit={submit} />
        </>
    )
}