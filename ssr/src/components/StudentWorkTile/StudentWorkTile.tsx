import React from "react";

import { useReposContext } from "@App/App";
import {
  normalizeSypervisorForWorksResp,
  WorksInitialModel,
  WorksSupervisorRespModel,
} from "@models/supervisor";
import { WorkModel } from "@models/works";
import { Collapse } from "antd";
const { Panel } = Collapse;
type Props = {
  work: WorkModel;
};

const StudentWorkTile: React.FC<Props> = ({ work }: Props) => {
  const repoContext = useReposContext();
  const [supervisors, setSupervisors] =
    React.useState<WorksSupervisorRespModel>(WorksInitialModel);
  const handleClick = React.useCallback(
    (sup_id: number) => {
      repoContext
        .postStudentBid(
          repoContext.id,
          sup_id,
          work.id,
          repoContext.loginStore.response.token
        )
        .then((r) =>
          // eslint-disable-next-line no-console
          console.log(r.success)
        );
    },
    [repoContext, work.id]
  );

  React.useEffect(() => {
    repoContext
      .getSupervisorForWork(repoContext.loginStore.response.token, work.id)
      .then((r) => {
        setSupervisors(normalizeSypervisorForWorksResp(r.data));
      });
  }, [repoContext, work.id]);
  return (
    <div>
      у тебя есть {work.kind} по {work.subject}
      <Collapse defaultActiveKey={["1"]}>
        <Panel header="Преподаватели" key="1">
          {supervisors.supervisors.map((sup) => (
            <>
              <Collapse defaultActiveKey={["2"]}>
                <Panel header={`${sup.firstName} ${sup.lastName}`} key="2">
                  <p>{sup.department}</p>
                  <p>{sup.birthdate}</p>
                  <p>{sup.email}</p>
                  {work.is_started === false && (
                    <button onClick={(e) => handleClick(sup.supervisorID)}>
                      Подать заявку
                    </button>
                  )}
                </Panel>
              </Collapse>
            </>
          ))}
        </Panel>
      </Collapse>
    </div>
  );
};

export default StudentWorkTile;
