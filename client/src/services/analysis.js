import api from "./api";

export const analyzePCB = async (image) => {
  const formData = new FormData();
  formData.append("image", image);

  const token = localStorage.getItem("token");

  const response = await api.post("/analyze", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};