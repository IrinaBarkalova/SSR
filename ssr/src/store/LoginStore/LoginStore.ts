import { ApiResp } from "@utils/apiTypes";
import axios from "axios";

export const getToken = async (
  login: string,
  password: string
): Promise<ApiResp> => {
  let formData = new FormData();
  formData.append("username", login);
  formData.append("password", password);
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/api/auth/login",
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    return {
      success: false,
      data: e,
    };
  }
};
