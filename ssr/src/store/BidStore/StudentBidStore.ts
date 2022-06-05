import { ApiResp } from "@utils/apiTypes";
import axios from "axios";

export const postStudentBid = async (
  studentId: number,
  supervisorId: number,
  workId: number,
  token: string
): Promise<ApiResp> => {
  try {
    const response = await axios({
      method: "put",
      url: "http://localhost:8080/api/student/bid",
      headers: { Authorization: `Bearer ${token}` },
      data: {
        studentID: studentId,
        supervisorID: supervisorId,
        workID: workId,
      },
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
