import { ApiResp } from "@utils/apiTypes";
import axios from "axios";

export const getStudentProfile = async (token: string): Promise<ApiResp> => {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:8080/api/student/profile",
      headers: { Authorization: `Bearer ${token}` },
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
export const getSupervisorProfile = async (token: string): Promise<ApiResp> => {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:8080/api/supervisor/profile",
      headers: { Authorization: `Bearer ${token}` },
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
