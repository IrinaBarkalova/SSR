import { ApiResp } from "@utils/apiTypes";
import axios from "axios";

export const ssr = async (
  bidId: number,
  studentId: number,
  token: string
): Promise<ApiResp> => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/api/student/ssr",
      data: { bidID: bidId, studentID: studentId },
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
