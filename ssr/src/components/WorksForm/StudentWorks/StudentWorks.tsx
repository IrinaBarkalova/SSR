import React from "react";

import StudentWorkTile from "@components/StudentWorkTile";
import { WorksRespModel } from "@models/works";
import { Space } from "antd";
type Props = {
  works: WorksRespModel;
};

const StudentWorks: React.FC<Props> = ({ works }: Props) => {
  return (
    <div>
      <Space direction="vertical">
        {works.works.map((work) => (
          <>
            <StudentWorkTile key={work.id} work={work} />
          </>
        ))}
      </Space>
    </div>
  );
};

export default React.memo(StudentWorks);
