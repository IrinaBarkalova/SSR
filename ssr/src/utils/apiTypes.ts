import { SupervisorProfileModel, StudentProfileModel, UserLoginRespModel } from "@models/user";

export type ApiResp<
  SuccessData = UserLoginRespModel | StudentProfileModel | SupervisorProfileModel,
  ErrorData = any
> =
  | {
      success: true;
      data: SuccessData;
    }
  | {
      success: false;
      data: ErrorData;
    };
