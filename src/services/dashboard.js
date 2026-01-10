import api from "@/utils/axiosInstance";

export const getCourseByType = async () => {
  try {
    const res = await api.get(`/course/getCoueseByType`);
    const data = await res.data;
    return data;
  } catch (error) {
    console.error("Error fetching courses by type", error);
    throw error;
  }
};

export const createNewsLetter = async (formData) => {
  try {
    const response = await api.post(`/newsletter/createNewsLetter`, formData);
    const responseData = await response.data;
    return responseData;
  } catch (error) {
    console.error("Error creating newsletter:", error);
    throw error;
  }
};