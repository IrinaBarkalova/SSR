import { StudentBidsApiModel, SupervisorBidsModel } from "@models/bid";
import { WorksSupervisorRespApiModel } from "@models/supervisor";
import { UserLoginRespModel, ProfileModel } from "@models/user";
import { WorksRespModel } from "@models/works";

export type ApiResp<
  SuccessData =
    | UserLoginRespModel
    | ProfileModel
    | WorksRespModel
    | WorksSupervisorRespApiModel
    | SupervisorBidsModel
    | StudentBidsApiModel,
  ErrorData = any
> =
  | {
      success: true;
      data?: SuccessData;
    }
  | {
      success: false;
      data?: ErrorData;
    };
