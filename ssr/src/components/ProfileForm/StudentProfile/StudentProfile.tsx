import React from "react";

import { useReposContext } from "@App/App";
import { StudentProfileInitialModel, StudentProfileModel } from "@models/user";
type Props = {
  role: string;
};
const StudentProfile: React.FC<Props> = ({ role }: Props) => {
  const repoContext = useReposContext();
  const [student, setStudent] = React.useState<StudentProfileModel>(
    StudentProfileInitialModel
  );
  React.useEffect(() => {
    repoContext.getStudentProfile(repoContext.token).then((r) => {
      setStudent(r.data);
    });
  }, [repoContext]);
  return (
    <div>
      <h3>
        Вы {role} №{student.studentID}
      </h3>
    </div>
  );
};

export default StudentProfile;
