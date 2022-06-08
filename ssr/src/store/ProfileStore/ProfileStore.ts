import { ApiResp } from "@utils/apiTypes";
import axios from "axios";

export const getProfile = async (
  token: string,
  role: string
): Promise<ApiResp> => {
  try {
    const response = await axios({
      method: "get",
      url: `http://localhost:8080/api/${role}/profile`,
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
