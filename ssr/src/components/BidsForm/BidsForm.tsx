import React from "react";

import { useReposContext } from "@App/App";
import StudentBids from "@components/BidsForm/StudentBids";
import SupervisorBids from "@components/BidsForm/SupervisorBids";
import {
  InitialBids,
  normalizeStudentBidsResp,
  normalizeSupervisorBidsResp,
  StudentBidsApiModel,
  SupervisorBidsModel,
} from "@models/bid";

const BidsForm: React.FC = () => {
  const repoContext = useReposContext();
  const [bidsStudent, setbidsStudent] =
    React.useState<StudentBidsApiModel>(InitialBids);
  const [bidsSupervisor, setbidsSupervisor] =
    React.useState<SupervisorBidsModel>(InitialBids);
  React.useEffect(() => {
    repoContext
      .getBids(
        repoContext.loginStore.response.token,
        repoContext.id,
        repoContext.loginStore.response.role
      )
      .then((r) => {
        if (repoContext.loginStore.response.role === "student") {
          setbidsStudent(normalizeStudentBidsResp(r.data));
        } else {
          setbidsSupervisor(normalizeSupervisorBidsResp(r.data));
        }
      });
  }, [repoContext]);
  return (
    <div className="">
      {repoContext.loginStore.response.role === "student" && (
        <StudentBids bids={bidsStudent} />
      )}
      {repoContext.loginStore.response.role === "supervisor" && (
        <SupervisorBids bids={bidsSupervisor} />
      )}
    </div>
  );
};

export default BidsForm;
