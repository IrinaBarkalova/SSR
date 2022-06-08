import React from "react";

import { useReposContext } from "@App/App";
import StudentWorks from "@components/WorksForm/StudentWorks";
import SupervisorWorks from "@components/WorksForm/SupervisorWorks";
import {
  normalizeWorksResp,
  WorksInitialModel,
  WorksRespModel,
} from "@models/works";

const WorksForm: React.FC = () => {
  const repoContext = useReposContext();
  const [works, setWorks] = React.useState<WorksRespModel>(WorksInitialModel);
  React.useEffect(() => {
    repoContext
      .getWorks(repoContext.token, repoContext.id, repoContext.role)
      .then((r) => {
        setWorks(normalizeWorksResp(r.data));
      });
  }, [repoContext]);
  return (
    <div className="">
      {repoContext.role === "student" && (
        <StudentWorks key="one" works={works} />
      )}
      {repoContext.role === "supervisor" && (
        <SupervisorWorks key="two" works={works} />
      )}
    </div>
  );
};

export default WorksForm;
