import { ApiResp } from "@utils/apiTypes";
import axios from "axios";

export const getSupervisorForWork = async (
  token: string,
  work_id: number
): Promise<ApiResp> => {
  let response;
  try {
    response = await axios({
      method: "get",
      url: `http://localhost:8080/api/student/work/supervisor`,
      headers: { Authorization: `Bearer ${token}` },
      params: { work_id: work_id },
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
