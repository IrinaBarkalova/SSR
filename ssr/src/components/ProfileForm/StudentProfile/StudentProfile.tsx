import React from "react";

import { ProfileModel } from "@models/user";
type Props = {
  student: ProfileModel;
};
const StudentProfile: React.FC<Props> = ({ student }: Props) => {
  return (
    <div>
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <h3>Почта: {student.email}</h3>
      <h3>Кафедра: {student.department}</h3>
      <h3>Курс: {student.year}</h3>
      <h3>Студенческий: {student.studentCard}</h3>
    </div>
  );
};

export default React.memo(StudentProfile);
