import { ApiResp } from "@utils/apiTypes";
import axios from "axios";

export const getWorks = async (
  token: string,
  student_id: number,
  role: string
): Promise<ApiResp> => {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:8080/api/${role}/work`,
      headers: { Authorization: `Bearer ${token}` },
      params: { student_id: student_id },
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
