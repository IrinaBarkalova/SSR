import { ApiResp } from "@utils/apiTypes";
import axios from "axios";

export const resolveBid = async (
  bidId: number,
  accept: boolean,
  supervisorId: number,
  token: string
): Promise<ApiResp> => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:8080/api/supervisor/bid/resolve",
      data: { accept: accept, bidID: bidId, supervisorID: supervisorId },
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
