import React from "react";

import { useReposContext } from "@App/App";
import { StudentProfileInitialModel, StudentProfileModel } from "@models/user";

const StudentProfile: React.FC = () => {
  const repoContext = useReposContext();
  const [student, setStudent] = React.useState<StudentProfileModel>(
    StudentProfileInitialModel
  );
  React.useEffect(() => {
    repoContext.getProfile(repoContext.token, repoContext.role).then((r) => {
      setStudent(r.data);
      repoContext.setId(r.data.studentID);
    });
  }, [repoContext]);
  return (
    <div>
      <h3>
        Вы {repoContext.role} №{student.studentID}
      </h3>
    </div>
  );
};

export default StudentProfile;
