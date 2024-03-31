import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useEditCateGoryPage = (id) => {
  return useMutation({
    mutationFn: (data) =>
      request.patch(`/category/${id}`, data).then((res) => res.data),
  });
};
