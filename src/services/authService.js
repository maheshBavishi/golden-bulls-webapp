import { signInWithPopup } from "firebase/auth";
import api from "@/utils/axiosInstance";
import { auth, provider } from "../../firebase";

export const signUp = async (data) => {
  const fromdata = new FormData();
  fromdata.append("name", data.name);
  fromdata.append("email", data.email);
  fromdata.append("password", data.password);
  fromdata.append("country", data.country);
  fromdata.append("state", data.state);
  fromdata.append("city", data.city);
  fromdata.append("referredBy", data.referredBy);
  try {
    const response = await api.post(`/user/signup`, fromdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data; // axios auto-parses JSON
  } catch (error) {
    console.error('Error during sign up:', error);
    throw error;
  }
};
