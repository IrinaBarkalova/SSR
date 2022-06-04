import React from "react";

import { useReposContext } from "@App/App";
import {
  SupervisorProfileInitialModel,
  SupervisorProfileModel,
} from "@models/user";

const SupervisorProfile: React.FC = () => {
  const repoContext = useReposContext();

  const [supervisor, setSupervisor] = React.useState<SupervisorProfileModel>(
    SupervisorProfileInitialModel
  );
  React.useEffect(() => {
    repoContext.getProfile(repoContext.token, repoContext.role).then((r) => {
      setSupervisor(r.data);
      repoContext.setId(r.data.supervisorID);
    });
  }, [repoContext]);
  return (
    <div>
      <h3>
        Вы {repoContext.role} №{supervisor.supervisorID}
      </h3>
    </div>
  );
};

export default SupervisorProfile;
