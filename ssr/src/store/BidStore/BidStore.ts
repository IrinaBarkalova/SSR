import { ApiResp } from "@utils/apiTypes";
import axios from "axios";

export const getBids = async (
  token: string,
  id: number,
  role: string
): Promise<ApiResp> => {
  let response;
  try {
    if (role === "student") {
      response = await axios({
        method: "get",
        url: `http://localhost:8080/api/${role}/bid`,
        headers: { Authorization: `Bearer ${token}` },
        params: { student_id: id },
      });
    } else {
      response = await axios({
        method: "get",
        url: `http://localhost:8080/api/${role}/bid`,
        headers: { Authorization: `Bearer ${token}` },
        params: { supervisor_id: id },
      });
    }
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
