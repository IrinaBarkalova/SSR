import React from "react";

import { WorksRespModel } from "@models/works";
import { Card } from "antd";

type Props = {
  works: WorksRespModel;
};
const SupervisorWorks: React.FC<Props> = ({ works }: Props) => {
  return (
    <div>
      {works.works.map((w) => (
        <Card
          key={w.id}
          title={`${w.kind}`}
          bordered={true}
          style={{ width: "auto" }}
        >
          <p>Предмет: {w.subject}</p>
          <p>Описание работы: {w.description}</p>

          {w.head === true && <b> Руководитель</b>}
        </Card>
      ))}
    </div>
  );
};

export default React.memo(SupervisorWorks);
