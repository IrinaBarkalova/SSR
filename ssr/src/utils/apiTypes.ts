import { UserLoginResp } from "@models/user";

export type ApiResp<SuccessData = UserLoginResp, ErrorData = any> =
  | {
      success: true;
      data: SuccessData;
    }
  | {
      success: false;
      data: ErrorData;
    };
