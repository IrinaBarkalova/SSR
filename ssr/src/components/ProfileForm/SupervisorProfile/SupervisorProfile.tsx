import React from "react";

import { useReposContext } from "@App/App";
import {
  SupervisorProfileInitialModel,
  SupervisorProfileModel,
} from "@models/user";
type Props = {
  role: string;
};
const SupervisorProfile: React.FC<Props> = ({ role }: Props) => {
  const repoContext = useReposContext();

  const [supervisor, setSupervisor] = React.useState<SupervisorProfileModel>(
    SupervisorProfileInitialModel
  );
  React.useEffect(() => {
    repoContext
      .getSupervisorProfile(repoContext.token)
      .then((r) => setSupervisor(r.data));
  }, [repoContext]);
  return (
    <div>
      <h3>
        Вы {role} №{supervisor.supervisorID}
      </h3>
    </div>
  );
};

export default SupervisorProfile;
