import React from "react";

import { ProfileModel } from "@models/user";
type Props = {
  supervisor: ProfileModel;
};
const SupervisorProfile: React.FC<Props> = ({ supervisor }: Props) => {
  return (
    <div>
      <h2>
        {supervisor.firstName} {supervisor.lastName}
      </h2>
      <h3>Почта: {supervisor.email}</h3>
      <h3>Кафедра: {supervisor.department}</h3>
    </div>
  );
};

export default React.memo(SupervisorProfile);
